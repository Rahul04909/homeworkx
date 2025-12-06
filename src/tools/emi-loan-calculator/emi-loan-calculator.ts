import { Component } from '@angular/core';
import { Header } from '../../app/components/header/header';
import { Footer } from '../../app/components/footer/footer';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-emi-loan-calculator',
  standalone: true,
  imports: [Header, Footer, NgIf],
  templateUrl: './emi-loan-calculator.html',
  styleUrl: './emi-loan-calculator.css',
})
export class EmiLoanCalculator {
  result: { emi: string; emiCompact: string; totalInterest: string; totalInterestCompact: string; totalPayment: string; totalPaymentCompact: string; monthlyRate: string; months: number } | null = null;
  formatCurrency(v: number) {
    return new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:2}).format(v);
  }
  trimZeros(s: string) {
    return s.replace(/\.0+$/,'').replace(/(\.[1-9]*)0+$/,'$1');
  }
  formatCompact(v: number) {
    const abs = Math.abs(v);
    if (abs >= 1e9) return '₦'+this.trimZeros((v/1e9).toFixed(2))+'B';
    if (abs >= 1e6) return '₦'+this.trimZeros((v/1e6).toFixed(2))+'M';
    if (abs >= 1e3) return '₦'+this.trimZeros((v/1e3).toFixed(2))+'K';
    return this.formatCurrency(v);
  }
  calculate(pStr: string, rateStr: string, yearsStr: string) {
    const P = Math.max(0, parseFloat(pStr || '0'));
    const annual = Math.max(0, parseFloat(rateStr || '0'));
    const years = Math.max(0, parseFloat(yearsStr || '0'));
    const r = annual/12/100;
    const n = Math.round(years*12);
    if (P<=0 || annual<=0 || years<=0 || n<=0) { this.result = null; return; }
    const pow = Math.pow(1+r,n);
    const emi = P * r * pow / (pow - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;
    this.result = {
      emi: this.formatCurrency(emi),
      emiCompact: this.formatCompact(emi),
      totalInterest: this.formatCurrency(totalInterest),
      totalInterestCompact: this.formatCompact(totalInterest),
      totalPayment: this.formatCurrency(totalPayment),
      totalPaymentCompact: this.formatCompact(totalPayment),
      monthlyRate: (r*100).toFixed(3)+"%",
      months: n
    };
  }
}
