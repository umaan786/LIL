import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import NeedAdvice from "../components/home/needAdvice";
import NewArrivals from "../components/home/newArrivals";
import PopularCategories from "../components/home/popularCategories";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <PopularCategories />
      <NeedAdvice />
      <div class="mb-4"></div>
      <NewArrivals />
    </main>
  );
}
