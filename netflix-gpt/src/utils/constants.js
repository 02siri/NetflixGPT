export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const USER_AVATAR = "https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXeeIVtmgzU089rwEnRNnxk6Q1GHEkPghoK2PHnziJv4WrrO_QxZ4crVPJIe3wjusYZjCmN1sxolKdCbQ1jli_HtH2hAzsU.png?r=fcd";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg";
  
  export const SUPPORTED_LANGUAGES = [
    {identifier:"en",name:"English"},
    {identifier:"hindi",name:"Hindi"},
    {identifier:"spanish",name:"Spanish"}
  ];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

//you generate it only for once, generate a new key https://platform.openai.com/account/api-keys
//hide this always 
