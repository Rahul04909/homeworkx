import { Component } from '@angular/core';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-roi-calculator',
  standalone: true,
  imports: [Header, Footer, NgIf],
  templateUrl: './roi-calculator.html',
  styleUrl: './roi-calculator.css',
})
export class RoiCalculator {
  result: { grossYield: string; netAnnual: string; netAnnualCompact: string; netAnnualNeg: boolean; netMonthly: string; netMonthlyCompact: string; netMonthlyNeg: boolean; roiPercent: string; roiNeg: boolean } | null = null;
  formatCurrency(v: number) {
    return new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:2}).format(v);
  }
  formatPercent(v: number) {
    return v.toFixed(2)+"%";
  }
  trimZeros(s: string) {
    return s.replace(/\.0+$/,'').replace(/(\.[1-9]*)0+$/,'$1');
  }
  formatCompact(v: number) {
    const abs = Math.abs(v);
    const sign = v < 0 ? '-' : '';
    if (abs >= 1e9) return sign+'₦'+this.trimZeros((abs/1e9).toFixed(2))+'B';
    if (abs >= 1e6) return sign+'₦'+this.trimZeros((abs/1e6).toFixed(2))+'M';
    if (abs >= 1e3) return sign+'₦'+this.trimZeros((abs/1e3).toFixed(2))+'K';
    return this.formatCurrency(v);
  }
  calculate(investStr: string, rentStr: string, expStr: string, occStr: string) {
    const invest = Math.max(0, parseFloat(investStr || '0'));
    const rent = Math.max(0, parseFloat(rentStr || '0'));
    const exp = Math.max(0, parseFloat(expStr || '0'));
    let occ = Math.max(0, Math.min(100, parseFloat(occStr || '100')));
    if (invest<=0) { this.result = null; return; }
    const annualGross = rent*12*(occ/100);
    const annualExpenses = exp*12;
    const netAnnual = annualGross - annualExpenses;
    const netMonthly = netAnnual/12;
    const grossYield = invest>0 ? (annualGross/invest)*100 : 0;
    const roiPercent = invest>0 ? (netAnnual/invest)*100 : 0;
    this.result = {
      grossYield: this.formatPercent(grossYield),
      netAnnual: this.formatCurrency(netAnnual),
      netAnnualCompact: this.formatCompact(netAnnual),
      netAnnualNeg: netAnnual < 0,
      netMonthly: this.formatCurrency(netMonthly),
      netMonthlyCompact: this.formatCompact(netMonthly),
      netMonthlyNeg: netMonthly < 0,
      roiPercent: this.formatPercent(roiPercent),
      roiNeg: roiPercent < 0
    };
  }
}

