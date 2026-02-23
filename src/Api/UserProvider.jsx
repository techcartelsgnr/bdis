// src/api/userApi.js
import axios from "axios";

const API_BASE_URL = "https://bdis.edu.in/admin-panel/public/api"; 
// const API_BASE_URL = "http://127.0.0.1:8000/api"; 


// Key Highlights For Home
export const highlight = async () => {
  try {
    // console.log('API URL', `${API_BASE_URL}/get-all-data`);
    const response = await axios.get(`${API_BASE_URL}/get-all-data`);
    console.log('highlight API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in highlight:', error); // Debugging log
    throw error;
  }
};

// Highlight page 
export const highlightpagedata = async (slug) => {
  console.log('slug', slug)
  try {
    const response = await axios.get(`${API_BASE_URL}/get-highlight-data/${slug}`);
    console.log('AKSHAY API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in highlight:', error); // Debugging log
    throw error;
  }
};
// All Facility Datas
export const facilitydata = async (slug) => {
  try {
    // console.log('API URL:', `${API_BASE_URL}/all-facility-data/${id}`);
    const response = await axios.get(`${API_BASE_URL}/all-facility-data/${slug}`);
    console.log('All Facility API Response:', response.data); 
    return response.data; 
    
  } catch (error) {
    console.error('Error in Facility API:', error);
    throw error;
  }
};

// All Activity Datas
export const activitydata = async (category) => {
  try {
    // console.log('API URL:', `${API_BASE_URL}/all-activity-data/${category}`);
    const response = await axios.get(`${API_BASE_URL}/all-activity-data/${category}`);
    console.log('All Activity API Response:', response.data); // Ensure correct logging
    return response.data; // Ensure response data is returned correctly
  } catch (error) {
    console.error('Error in Activity API:', error);
    throw error;
  }
};

// single Activity Datas
export const singleactivitydata = async (slug) => {
  try {
    // console.log('API URL:', `${API_BASE_URL}/single-activity-data/${slug}`);
    const response = await axios.get(`${API_BASE_URL}/single-activity-data/${slug}`);
    console.log('SINGLE Activity API Response:', response.data); // Ensure correct logging
    return response.data; // Ensure response data is returned correctly
  } catch (error) {
    console.error('Error in Single Activity API:', error);
    throw error;
  }
};
// Header Data
export const header = async () => {
  try {
    // console.log('API URL', `${API_BASE_URL}/all-header-data`);
    const response = await axios.get(`${API_BASE_URL}/all-header-data`);
    console.log('Header Content API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Header Content:', error); // Debugging log
    throw error;
  }
};

// About Us Data
export const about = async (slug) => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/all-about-data/${slug}`);
    const response = await axios.get(`${API_BASE_URL}/all-about-data/${slug}`);
    console.log('About Us Content API Response:', response); // Debugging log
    return response;
  } catch (error) {
    console.error('Error in About Content:', error); // Debugging log
    throw error;
  }
};

// Bdps Data
export const bdps = async () => {
 
  try {
    const response = await axios.get(`${API_BASE_URL}/all-bdps-data`);
    console.log('BDPS Content API Response:', response); // Debugging log
    return response;
  } catch (error) {
    console.error('Error in BDPS Content:', error); // Debugging log
    throw error;
  }
};

// Gallery Data
export const gallery = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/all-gallery-data`);
    const response = await axios.get(`${API_BASE_URL}/all-gallery-data`);
    console.log('Gallery Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Gallery Content:', error); // Debugging log
    throw error;
  }
};
// Public Mandatory Data
export const mandatory = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/all-mandatory-data`);
    const response = await axios.get(`${API_BASE_URL}/all-mandatory-data`);
    console.log('Mandatory Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Mandatory Content:', error); // Debugging log
    throw error;
  }
};

// Online Fee Data
export const onlinefee = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/online-fee`);
    const response = await axios.get(`${API_BASE_URL}/online-fee`);
    console.log('Online Fee Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Online Fee Content:', error); // Debugging log
    throw error;
  }
};
// Rules & Regulation Data
export const rulesregulation = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/rules-regulation`);
    const response = await axios.get(`${API_BASE_URL}/rules-regulation`);
    console.log('Rules & Regulation Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Rules & Regulation Content:', error); // Debugging log
    throw error;
  }
};

// Principal Message
export const principalmessage =async()=>{
  try{
    const response =await axios.get(`${API_BASE_URL}/principal-message`);
    console.log('principalmessage API Response:',response.data);
    return response.data;
  }catch(error){
    console.error('Error in Principal Message:', error);
    throw error;
  }
};

// Inquiry Form
export const postinquirydata=async(inquiryinfo)=>{
  console.log('inquiryinfo', inquiryinfo);
  
  try{
    const response=await axios.post(`${API_BASE_URL}/inquiry-submit`,inquiryinfo);
    console.log('Inquiry Information API Response:', response.data);
    return response.data;
  }catch(error){
    console.error('Error in Inquiry Information:', error);
    throw error;
  }
};

// Contact Form
export const postcontactdata=async(contactinfo)=>{
  console.log('contactinfo', contactinfo);
  
  try{
    const response=await axios.post(`${API_BASE_URL}/contact-submit`,contactinfo);
    console.log('Contact Information API Response:', response.data);
    return response.data;
  }catch(error){
    console.error('Error in Contact Information:', error);
    throw error;
  }
};

// Admission Form
export const postadmissiontdata=async(admissioninfo)=>{
  console.log('admissioninfo', admissioninfo);
  
  try{
    const response=await axios.post(`${API_BASE_URL}/admission-submit`,admissioninfo);
    console.log('admission Information API Response:', response.data);
    return response.data;
  }catch(error){
    console.error('Error in admission Information:', error);
    throw error;
  }
};

// Academics Api

// Board Result Data
export const boardresult = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/board-result`);
    const response = await axios.get(`${API_BASE_URL}/board-result`);
    console.log('Board Result Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Board Result Content:', error); // Debugging log
    throw error;

  }
};
// Curriculum Data
export const curriculum = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/curriculum`);
    const response = await axios.get(`${API_BASE_URL}/curriculum`);
    console.log('Curriculum Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Curriculum Content:', error); // Debugging log
    throw error;
  }
};
// Scholarship Data
export const scholarship = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/scholarship`);
    const response = await axios.get(`${API_BASE_URL}/scholarship`);
    console.log('Scholarship Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Scholarship Content:', error); // Debugging log
    throw error;
  }
};
// Examination Change Data
export const examinationchange = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/examination-change`);
    const response = await axios.get(`${API_BASE_URL}/examination-change`);
    console.log('Examination Change Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Examination Change Content:', error); // Debugging log
    throw error;
  }
};
// circulars Data
export const circulars = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/circulars`);
    const response = await axios.get(`${API_BASE_URL}/circulars`);
    console.log('circulars Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in circulars Content:', error); // Debugging log
    throw error;
  }
};

// Sample Paper Data
export const samplepaper = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/sample-paper`);
    const response = await axios.get(`${API_BASE_URL}/sample-paper`);
    console.log('samplepaper Content API Response:', response); // Debugging log
    return response.data; 
  } catch (error) {
    console.error('Error in samplepaper Content:', error); // Debugging log
    throw error;
  }
};
// Notification Data
export const notification = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/notification`);
    const response = await axios.get(`${API_BASE_URL}/notification`); 
    console.log('Notification Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Notification Content:', error); // Debugging log
    throw error;
  }
};  




// Tc Data
export const tc = async () => {
 
  try {
    // console.log('API URL', `${API_BASE_URL}/tcdownload`);
    const response = await axios.get(`${API_BASE_URL}/tcdownload`); 
    console.log('Tc Content API Response:', response); // Debugging log
    return response.data;
  } catch (error) {
    console.error('Error in Tc Content:', error); // Debugging log
    throw error;
  }
};  


