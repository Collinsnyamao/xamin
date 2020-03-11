import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'landing-page1', loadChildren: './landing-page1/landing-page1.module#LandingPage1Module' },
  { path: 'landing-page2', loadChildren: './landing-page2/landing-page2.module#LandingPage2Module' },
  { path: 'landing-page3', loadChildren: './landing-page3/landing-page3.module#LandingPage3Module' },
  { path: 'our-cases', loadChildren: './our-cases/our-cases.module#OurCasesModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'about-us', loadChildren: './about/about.module#AboutModule' },
  { path: 'services', loadChildren: './service/service.module#ServiceModule' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
