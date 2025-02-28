import React from 'react';
import { websiteName } from '@/app/config';
import styles from './page.module.css';
import Banner from '../components/Banner';
import Link from 'next/link';
import Image from 'next/image';
import careers from '@/public/personal/careers.webp';
import growthOriented from '@/public/company/growth-oriented-environment.png';
import embark from '@/public/embark.webp';

export const metadata = {
  title: websiteName + 'Explore Different Careers',
  description: 'Explore the diverse range of career opportunities at My Monty and join a team that values your growth and aspirations. Check out our vacancies on LinkedIn now!',
};

const data = {
  title: 'Join Our Dream Team',
  subtitle: 'Careers',
  desc: 'Don’t miss your chance! Check out our vacancies on <a className="text-blue-500" href="https://www.linkedin.com/company/mymonty-lebanon/about/?viewAsMember=true" target="_blank">LinkedIn</a> now.',
  image: {
    inGrid: true,
    layout: 'half',
    url: careers,
  },
  cta: {
    type: 'link',
    link: {
      name: 'Explore Careers',
      url: 'https://www.linkedin.com/company/mymonty-lebanon/jobs',
      target: '_blank'
    }
  }
}

const departments = {
  1: {
    'icon': <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.4 15V39M28 24.6V39M37.6 34.2V39M52 27C52 40.2548 41.2548 51 28 51C14.7452 51 4 40.2548 4 27C4 13.7452 14.7452 3 28 3C41.2548 3 52 13.7452 52 27Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'Audit',
  },
  2: {
    'icon': <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.5435 25.14L26.918 26.5146L15.1014 38.3311C14.6776 38.755 14.0215 38.7925 13.6435 38.4145C13.2655 38.0365 13.3031 37.3804 13.7269 36.9566L25.5435 25.14Z" fill="white" />
      <path d="M14.2958 39.058C13.9411 39.058 13.6134 38.9255 13.3729 38.685C13.1118 38.424 12.9803 38.0673 13.0024 37.6807C13.0235 37.3105 13.1847 36.9571 13.4563 36.6857L25.5436 24.5984L27.4596 26.5144L15.3723 38.6017C15.0823 38.8916 14.6901 39.058 14.2958 39.058ZM25.5436 25.6813L13.9978 37.2271C13.8594 37.3657 13.7773 37.5421 13.7669 37.7244C13.7575 37.8901 13.8099 38.0389 13.9144 38.1436C14.1333 38.362 14.5686 38.3223 14.8309 38.0602L26.3767 26.5144L25.5436 25.6813Z" fill="white" />
      <path d="M23.2779 22.8725L29.1875 28.7821L34.153 23.8166L28.2435 17.907L23.2779 22.8725Z" fill="white" />
      <path d="M26.8757 16.5416L21.9102 21.5071L23.2539 22.8508L28.2194 17.8853L26.8757 16.5416Z" fill="white" />
      <path d="M23.2543 23.3921L21.3691 21.507L26.8761 16L28.7612 17.8851L23.2543 23.3921ZM22.452 21.507L23.2543 22.3092L27.6784 17.8851L26.8761 17.0829L22.452 21.507Z" fill="white" />
      <path d="M34.1511 23.8163L29.1855 28.7819L30.4274 30.0237L35.3929 25.0582L34.1511 23.8163Z" fill="white" />
      <path d="M30.4278 30.5652L28.6445 28.782L34.1515 23.275L35.9347 25.0583L30.4278 30.5652ZM29.7274 28.782L30.4278 29.4824L34.8519 25.0583L34.1515 24.3579L29.7274 28.782Z" fill="white" />
      <path d="M40.2791 36.235H31.9922V38.1016H40.2791V36.235Z" fill="white" />
      <path d="M40.6621 38.4845H31.6094V35.8521H40.6621V38.4845ZM32.3752 37.7187H39.8963V36.6178H32.3752V37.7187Z" fill="white" />
      <circle cx="27.5" cy="27.5" r="25.5" stroke="white" strokeWidth="4" />
    </svg>,
    'name': 'Compliance & Legal',
  },
  3: {
    'icon': <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.5 40.5V29.5M29.5 18.5H29.5275M57 29.5C57 44.6878 44.6878 57 29.5 57C14.3122 57 2 44.6878 2 29.5C2 14.3122 14.3122 2 29.5 2C44.6878 2 57 14.3122 57 29.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'Risk',
  },
  4: {
    'icon': <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15.7852" y="4.5" width="23.5762" height="21.9152" rx="4.5" stroke="white" strokeWidth="3" />
      <rect x="2.5" y="28.2749" width="24.0267" height="22.2249" rx="4.5" stroke="white" strokeWidth="3" />
      <rect x="28.625" y="28.2749" width="24.0267" height="22.2249" rx="4.5" stroke="white" strokeWidth="3" />
      <path d="M25.0781 27.9156H30.0612C30.0612 29.2917 28.9457 30.4072 27.5696 30.4072C26.1936 30.4072 25.0781 29.2917 25.0781 27.9156Z" fill="white" />
    </svg>,
    'name': 'Product',
  },
  5: {
    'icon': <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 50.8276H37M27 40.8659V50.8276M14 40.8659H40C44.2004 40.8659 46.3006 40.8659 47.9049 40.0516C49.3161 39.3353 50.4635 38.1923 51.1825 36.7865C52 35.1883 52 33.0962 52 28.9119V17.954C52 13.7697 52 11.6776 51.1825 10.0794C50.4635 8.67357 49.3161 7.53061 47.9049 6.81432C46.3006 6 44.2004 6 40 6H14C9.79961 6 7.69941 6 6.09507 6.81432C4.68386 7.53061 3.5365 8.67357 2.81745 10.0794C2 11.6776 2 13.7697 2 17.954V28.9119C2 33.0962 2 35.1883 2.81745 36.7865C3.5365 38.1923 4.68386 39.3353 6.09507 40.0516C7.69941 40.8659 9.79961 40.8659 14 40.8659Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'Marketing',
  },
  6: {
    'icon': <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5 53C41.5833 53 53 41.5833 53 27.5C53 13.4167 41.5833 2 27.5 2C13.4167 2 2 13.4167 2 27.5C2 41.5833 13.4167 53 27.5 53Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.9155 30.5465C31.7356 30.0068 31.6456 29.7369 31.6503 29.5162C31.6552 29.2841 31.6863 29.1623 31.7932 28.9562C31.8948 28.7602 32.1666 28.5073 32.7101 28.0016C34.2111 26.6048 35.15 24.6121 35.15 22.4C35.15 18.175 31.725 14.75 27.5 14.75C23.275 14.75 19.85 18.175 19.85 22.4C19.85 24.6121 20.7889 26.6048 22.2899 28.0016C22.8334 28.5073 23.1052 28.7602 23.2068 28.9562C23.3137 29.1623 23.3448 29.2841 23.3497 29.5162C23.3544 29.7369 23.2644 30.0068 23.0845 30.5465L20.745 37.5649C20.4429 38.4714 20.2918 38.9247 20.3824 39.2855C20.4617 39.6013 20.6588 39.8749 20.9333 40.05C21.247 40.25 21.7248 40.25 22.6803 40.25H32.3197C33.2752 40.25 33.753 40.25 34.0667 40.05C34.3412 39.8749 34.5383 39.6013 34.6176 39.2855C34.7082 38.9247 34.5571 38.4714 34.255 37.5649L31.9155 30.5465Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'IT Security',
  },
  7: {
    'icon': <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50.34 10.2091C50.34 14.1905 40.1903 17.4181 27.67 17.4181C15.1497 17.4181 5 14.1905 5 10.2091M50.34 10.2091C50.34 6.22761 40.1903 3 27.67 3C15.1497 3 5 6.22761 5 10.2091M50.34 10.2091V43.8513C50.34 47.8404 40.2644 51.0604 27.67 51.0604C15.0756 51.0604 5 47.8404 5 43.8513V10.2091M50.34 27.0302C50.34 31.0192 40.2644 34.2393 27.67 34.2393C15.0756 34.2393 5 31.0192 5 27.0302" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'Data',
  },
  8: {
    'icon': <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.1667 37.3333C41.2882 37.3333 37.3333 41.2882 37.3333 46.1667C37.3333 51.0452 41.2882 55 46.1667 55C51.0452 55 55 51.0452 55 46.1667C55 41.2882 51.0452 37.3333 46.1667 37.3333ZM46.1667 37.3333V16.7222C46.1667 15.1604 45.5462 13.6625 44.4418 12.5581C43.3375 11.4538 41.8396 10.8333 40.2778 10.8333H31.4444M10.8333 19.6667C15.7118 19.6667 19.6667 15.7118 19.6667 10.8333C19.6667 5.95482 15.7118 2 10.8333 2C5.95482 2 2 5.95482 2 10.8333C2 15.7118 5.95482 19.6667 10.8333 19.6667ZM10.8333 19.6667V55" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'IT',
  },
  9: {
    'icon': <svg width="55" height="57" viewBox="0 0 55 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.9985 48.0335L22.563 51.5167C23.028 52.5536 23.787 53.4346 24.7479 54.0529C25.7088 54.6712 26.8302 55.0002 27.9762 55C29.1222 55.0002 30.2436 54.6712 31.2045 54.0529C32.1654 53.4346 32.9243 52.5536 33.3894 51.5167L34.9539 48.0335C35.5108 46.7975 36.4476 45.767 37.6308 45.089C38.8214 44.4091 40.1988 44.1195 41.5658 44.2616L45.3937 44.665C46.5332 44.7843 47.6831 44.5738 48.7042 44.059C49.7252 43.5442 50.5734 42.7473 51.146 41.7647C51.7194 40.7828 51.9925 39.6572 51.9323 38.5246C51.8721 37.392 51.4812 36.3011 50.807 35.3841L48.5405 32.3013C47.7335 31.1954 47.3023 29.8643 47.3092 28.5C47.3089 27.1395 47.7442 25.8138 48.5524 24.7134L50.8189 21.6306C51.4931 20.7137 51.884 19.6227 51.9442 18.4901C52.0044 17.3575 51.7313 16.2319 51.1579 15.25C50.5853 14.2675 49.7371 13.4705 48.7161 12.9557C47.695 12.4409 46.5451 12.2304 45.4056 12.3497L41.5777 12.7531C40.2107 12.8952 38.8333 12.6056 37.6427 11.9257C36.4572 11.2439 35.5201 10.208 34.9658 8.96656L33.3894 5.48328C32.9243 4.4464 32.1654 3.5654 31.2045 2.94711C30.2436 2.32882 29.1222 1.99981 27.9762 2C26.8302 1.99981 25.7088 2.32882 24.7479 2.94711C23.787 3.5654 23.028 4.4464 22.563 5.48328L20.9985 8.96656C20.4442 10.208 19.5071 11.2439 18.3216 11.9257C17.131 12.6056 15.7536 12.8952 14.3866 12.7531L10.5468 12.3497C9.4073 12.2304 8.25734 12.4409 7.23632 12.9557C6.21529 13.4705 5.36706 14.2675 4.79446 15.25C4.22113 16.2319 3.94799 17.3575 4.00818 18.4901C4.06836 19.6227 4.45929 20.7137 5.13353 21.6306L7.39995 24.7134C8.20821 25.8138 8.64346 27.1395 8.64321 28.5C8.64346 29.8605 8.20821 31.1862 7.39995 32.2866L5.13353 35.3694C4.45929 36.2864 4.06836 37.3773 4.00818 38.5099C3.94799 39.6425 4.22113 40.7681 4.79446 41.75C5.36762 42.732 6.21596 43.5286 7.23684 44.0433C8.25771 44.558 9.40739 44.7688 10.5468 44.6503L14.3747 44.2469C15.7417 44.1048 17.1191 44.3944 18.3097 45.0743C19.4996 45.7542 20.4411 46.7903 20.9985 48.0335Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.9714 36.45C32.4066 36.45 36.002 32.8907 36.002 28.5C36.002 24.1093 32.4066 20.55 27.9714 20.55C23.5362 20.55 19.9408 24.1093 19.9408 28.5C19.9408 32.8907 23.5362 36.45 27.9714 36.45Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'Operation',
  },
  10: {
    'icon': <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.6 40.25L40.25 32.6L32.6 24.95M22.4 14.75L14.75 22.4L22.4 30.05M53 27.5C53 41.5833 41.5833 53 27.5 53C13.4167 53 2 41.5833 2 27.5C2 13.4167 13.4167 2 27.5 2C41.5833 2 53 13.4167 53 27.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'Network',
  },
  11: {
    'icon': <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.575 34.3C18.575 37.5861 21.2389 40.25 24.525 40.25H30.05C33.5708 40.25 36.425 37.3958 36.425 33.875C36.425 30.3542 33.5708 27.5 30.05 27.5H24.95C21.4292 27.5 18.575 24.6458 18.575 21.125C18.575 17.6042 21.4292 14.75 24.95 14.75H30.475C33.7611 14.75 36.425 17.4139 36.425 20.7M27.5 10.925V14.75M27.5 40.25V44.075M53 27.5C53 41.5833 41.5833 53 27.5 53C13.4167 53 2 41.5833 2 27.5C2 13.4167 13.4167 2 27.5 2C41.5833 2 53 13.4167 53 27.5Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'Finance',
  },
  12: {
    'icon': <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.3529 28.3344V14.0386C47.3529 9.82468 47.3529 7.71773 46.4874 6.10823C45.7261 4.69248 44.5112 3.54144 43.017 2.82008C41.3183 2 39.0945 2 34.6471 2H17.7059C13.2584 2 11.0347 2 9.33596 2.82008C7.84173 3.54144 6.62688 4.69248 5.86554 6.10823C5 7.71773 5 9.82468 5 14.0386V40.1221C5 44.336 5 46.443 5.86554 48.0525C6.62688 49.4682 7.84173 50.6193 9.33596 51.3406C11.0347 52.1607 13.2583 52.1607 17.7057 52.1607H26.1765M32.7941 44.6366L38.0882 49.6527L50 38.3665" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'HR',
  },
  13: {
    'icon': <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.4047 22.326V14.1956C46.4047 9.92675 46.4047 7.79232 45.579 6.16183C44.8527 4.72761 43.6937 3.56155 42.2682 2.83078C40.6476 2 38.5262 2 34.2833 2H18.1214C13.8785 2 11.7571 2 10.1365 2.83078C8.71101 3.56155 7.55205 4.72761 6.82572 6.16183C6 7.79232 6 9.92675 6 14.1956V40.6195C6 44.8883 6 47.0228 6.82572 48.6533C7.55205 50.0875 8.71101 51.2535 10.1365 51.9843C11.7571 52.8151 13.8785 52.8151 18.1214 52.8151H22.4144M44.5107 40.1113V35.665C44.5107 33.2094 42.5322 31.2187 40.0915 31.2187C37.6508 31.2187 35.6722 33.2094 35.6722 35.665V40.1113M35.2934 50.2743H44.8895C46.3038 50.2743 47.011 50.2743 47.5512 49.9974C48.0263 49.7538 48.4126 49.3651 48.6548 48.8871C48.93 48.3436 48.93 47.6321 48.93 46.2091V44.1765C48.93 42.7536 48.93 42.0421 48.6548 41.4986C48.4126 41.0205 48.0263 40.6318 47.5512 40.3882C47.011 40.1113 46.3038 40.1113 44.8895 40.1113H35.2934C33.8791 40.1113 33.172 40.1113 32.6318 40.3882C32.1566 40.6318 31.7703 41.0205 31.5282 41.4986C31.2529 42.0421 31.2529 42.7536 31.2529 44.1765V46.2091C31.2529 47.6321 31.2529 48.3436 31.5282 48.8871C31.7703 49.3651 32.1566 49.7538 32.6318 49.9974C33.172 50.2743 33.8791 50.2743 35.2934 50.2743Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'name': 'Business Development',
  },
}

const positions = {
  1: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  2: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  3: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  4: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  5: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
  7: {
    'icon': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V15.8C21 14.1198 21 13.2798 20.673 12.638C20.3854 12.0735 19.9265 11.6146 19.362 11.327C18.7202 11 17.8802 11 16.2 11H7.8C6.11984 11 5.27976 11 4.63803 11.327C4.07354 11.6146 3.6146 12.0735 3.32698 12.638C3 13.2798 3 14.1198 3 15.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    'title': 'Merchant Relationship Officer',
    'description': 'Your role as a Merchant Relationship Officer is to create long-term, trusting relationships.',
    'link': 'google.com',
  },
}

const Careers = () => {
  return (
    <div>
      <Banner data={data} />

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container flex items-center gap-20 max-lg:flex-col'>
          <div className='w-1/3'>
            <Image alt="Handshake" src={embark} />
          </div>
          <div className='w-2/3'>
            <h2 className='uppercase font-black text-3xl sm:text-5xl md:text-[2.875rem] leading-none'>Embark on Your Career Journey with Us</h2>
            <p className='leading-8 mt-4 w-full md:w-2/3'>Our team is our biggest asset! We are dedicated to recognizing and cultivating talent from within, offering a transparent and well-defined career path for our valuable team members. <br /><br />

              We heavily invest in employee training programs, workshops, and mentorship initiatives, ensuring our team is not only well-equipped for their current roles but also ready for future challenges.</p>
          </div>

        </div>
      </section>

      <section className='pt-14 lg:pt-28'>
        <div className='relative'>
          <Image alt='Growth Oriented Environmemt' fill placeholder='blur' quality={100} sizes='100vw' className='!relative object-cover aspect-[4/7] md:aspect-auto' src={growthOriented} />

          <div className='absolute top-0 flex flex-col justify-center items-center h-full w-full text-white'>
            <div className='container'>
              <div className='flex flex-col items-center gap-10'>
                <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] w-full lg:w-2/3 leading-none'>DISCOVER A NURTURING AND GROWTH-ORIENTED ENVIRONMENT</h2>
                <p className='leading-8 mt-4 text-center w-full lg:w-2/3 mx-auto'>Whether you're just starting your career or aiming for the next milestone, discover a nurturing and growth-oriented environment that values your aspirations. We provide the resources needed to turn your career goals into reality.</p>
                <a href="https://www.linkedin.com/company/mymonty-lebanon/jobs" target='_blank' className='mm-button !bg-white !text-black w-max mt-5'>Join Us Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-14 pb-14 lg:pt-28 lg:pb-20 bg-black text-white'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] leading-none'>Careers</h2>
          <div className='flex flex-wrap justify-center gap-10 text-center mt-14'>
            {Object.values(departments).map((department, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='flex place-content-center rounded-3xl bg-[#333333] bg-opacity-50 p-7'>
                  {department.icon}
                </div>
                <h3 className='w-min leading-[24px] mt-1'>{department.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className='pt-14 pb-14 lg:pt-28 lg:pb-20'>
        <div className='container'>
          <h2 className='text-center uppercase font-black text-3xl sm:text-5xl lg:text-[2.875rem] leading-none'>Our Departments</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative mt-20'>
            {Object.values(positions).map((position, index) => (
              <div key={index} className='lg:basis-1/3 overflow-hidden rounded-[1.875rem] bg-gray-100'>
                <div className='px-10 py-14'>
                  <div className='flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white text-3xl font-bold'>
                    {position.icon}
                  </div>
                  <div className='mt-14'>
                    <h3 className='text-4xl font-bold'>{position.title}</h3>
                    <p className='leading-8 mt-4'>{position.description}</p>
                    <Link href={position.link} className='mm-button mt-8'>Join us now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Careers;
