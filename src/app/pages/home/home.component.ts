import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { Advertiesment } from '../../components/advertiesment/advertiesment';
import { FeaturedProperties } from '../../components/featured-properties/featured-properties';
import { AboutHomeworkx } from '../../components/about-homeworkx/about-homeworkx';
import { PropertiesList } from '../../components/properties-list/properties-list';
import { Advertiesment1 } from '../../components/advertiesment-1/advertiesment-1';
import { FrontendBlogs } from '../../components/frontend-blogs/frontend-blogs';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Promotion } from '../../components/promotion/promotion';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Hero, Services, Advertiesment, FeaturedProperties, AboutHomeworkx, PropertiesList, Advertiesment1, FrontendBlogs, Testimonials, Promotion, Footer],
  templateUrl: './home.component.html'
})
export class HomeComponent {}