import React from "react";
import { websiteName } from "@/app/config";
import styles from "./page.module.css";
import One from "./sections/One";
import Banner from "../components/Banner";

export const metadata = {
  title: websiteName + "about us",
  description: "MyMonty",
};

const data = {
  title: 'MyMonty will always have your back.',
  subtitle: 'lorem',
  desc: 'lorem Ipsum lorem Ipsum lorem Ipsum ',
  image: '',
}

const AboutUs = () => {
  return (
    <div>
      <Banner data={data} />
      <One />
    </div>
  );
};

export default AboutUs;
