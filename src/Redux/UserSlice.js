// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { highlight, principalmessage, postinquirydata, postcontactdata, header, about, gallery, mandatory, facilitydata, activitydata, postadmissiontdata, singleactivitydata, onlinefee, rulesregulation, boardresult, curriculum, scholarship, examinationchange, circulars, samplepaper, notification, tc, highlightpagedata, bdps } from "../Api/UserProvider";





// Key Highlight for API calls
export const getdata = createAsyncThunk("user/fetchinghomedata", async (_, { rejectWithValue }) => {
    try {
        return await highlight();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Highlight page for API calls
export const getHighlightdata = createAsyncThunk("user/fetchingnewhighlightdata", async (slug, { rejectWithValue }) => {
    console.log('Highlight Data Slice with ID', getHighlightdata)
    try {
        return await highlightpagedata(slug);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


// FAQ
export const getFaqData = createAsyncThunk(
    "user/fetchingfaq",
    async (_, { rejectWithValue }) => {
        try {
            const res = await highlight();   // same API
            return res.faq;                  // extract faq only
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);


// All Facility for API calls
// export const getFacilityAlldata = createAsyncThunk(
//     "user/fetchingfacilitydata",
//     async (id, { rejectWithValue }) => {
//       try {
//         const response = await facilitydata(title);
//         return response; 
//       } catch (error) {
//         return rejectWithValue(error.response.data);
//       }
//     }
//   );

export const getFacilityAlldata = createAsyncThunk("user/fetchingfacilityall", async (slug, { rejectWithValue }) => {

    try {
        console.log('Facility Data Slice with ID', getFacilityAlldata)
        return await facilitydata(slug);


    } catch (error) {
        return rejectWithValue(error.response?.data || 'An error occurred');
    }
});

// All Activity for API calls
export const getActivityAlldata = createAsyncThunk(
    "user/fetchingactivitydata",
    async (category, { rejectWithValue }) => {
        try {
            const response = await activitydata(category);
            return response; // Make sure response is properly returned
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Single Activity for API calls
export const getSingleActivityAlldata = createAsyncThunk(
    "user/fetchingsingleactivitydata",
    async (slug, { rejectWithValue }) => {

        try {
            const response = await singleactivitydata(slug);
            return response; // Make sure response is properly returned
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
// Header content for API calls
export const getHeaderdata = createAsyncThunk("user/fetchingheader", async (_, { rejectWithValue }) => {

    try {

        return await header();


    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// About Us content for API calls
export const getAboutdata = createAsyncThunk("user/fetchingabout", async (slug, { rejectWithValue }) => {

    try {
        console.log('About Data Slice with ID', getAboutdata)
        return await about(slug);


    } catch (error) {
        return rejectWithValue(error.response?.data || 'An error occurred');
    }
});

// Bdps content for API calls
export const getBdpsdata = createAsyncThunk("user/fetchingbdps", async (_, { rejectWithValue }) => {

    try {
        console.log('Bdps Data Slice with ID', getBdpsdata)
        return await bdps();


    } catch (error) {
        return rejectWithValue(error.response?.data || 'An error occurred');
    }
});
// Gallery content for API calls
export const getGallerydata = createAsyncThunk("user/fetchinggallery", async (_, { rejectWithValue }) => {

    try {
        console.log('Gallery Data Slice with ID', getGallerydata)
        return await gallery();


    } catch (error) {
        return rejectWithValue(error.response?.data || 'An error occurred');
    }
});
// mandatory content for API calls
export const getMandatorydata = createAsyncThunk("user/fetchingmandatory", async (_, { rejectWithValue }) => {

    try {
        console.log('mandatory Data Slice with ID', getMandatorydata)
        return await mandatory();


    } catch (error) {
        return rejectWithValue(error.response?.data || 'An error occurred');
    }
});

// Online Fee content for API calls
export const getOnlineFeeData = createAsyncThunk("user/fetchingonlinefee", async (_, { rejectWithValue }) => {

    try {
        console.log('Online Fee Data Slice with ID', getOnlineFeeData)
        return await onlinefee();


    } catch (error) {
        return rejectWithValue(error.response?.data || 'An error occurred');
    }
});

// Rules & Regulation content for API calls
export const getRulesRegulationData = createAsyncThunk("user/fetchingrulesregulation", async (_, { rejectWithValue }) => {

    try {
        console.log('Rules & Regulation Data Slice with ID', getRulesRegulationData)
        return await rulesregulation();


    } catch (error) {
        return rejectWithValue(error.response?.data || 'An error occurred');
    }
});


// Principal Message for API Call
export const principaldata = createAsyncThunk("user/fetchingmessage", async (_, { rejectWithValue }) => {
    try {
        console.log('principaldata slice', principaldata)
        return await principalmessage();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Inquiry Information for API Call
export const inquirydata = createAsyncThunk("user/fetchingmessage", async (inquiryinfo, { rejectWithValue }) => {
    try {
        console.log('inquiryinfo slice', principaldata)
        return await postinquirydata(inquiryinfo);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Contact Information for API Call
export const contactdata = createAsyncThunk("user/fetchingcontact", async (contactinfo, { rejectWithValue }) => {
    try {
        console.log('contactinfo slice', contactdata)
        return await postcontactdata(contactinfo);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Admission Information for API Call
export const admissiondata = createAsyncThunk("user/fetchingadmission", async (admissioninfo, { rejectWithValue }) => {
    try {
        console.log('admissioninfo slice', admissiondata)
        return await postadmissiontdata(admissioninfo);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


// Academics Api Call
// Board Result Data
export const getBoardResultData = createAsyncThunk("user/fetchingboardresult", async (_, { rejectWithValue }) => {
    try {
        console.log('Board Result Data Slice with ID', getBoardResultData)
        return await boardresult();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Curriculum Data
export const getCurriculumData = createAsyncThunk("user/fetchingcurriculum", async (_, { rejectWithValue }) => {
    try {
        console.log('Curriculum Data Slice with ID', getCurriculumData)
        return await curriculum();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Scholarship Data
export const getScholarshipData = createAsyncThunk("user/fetchingscholarship", async (_, { rejectWithValue }) => {
    try {
        console.log('Scholarship Data Slice with ID', getScholarshipData)
        return await scholarship();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Examination Change Data
export const getExaminationChangeData = createAsyncThunk("user/fetchingexaminationchange", async (_, { rejectWithValue }) => {
    try {
        console.log('Examination Change Data Slice with ID', getExaminationChangeData)
        return await examinationchange();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// circulars Data
export const getCircularsData = createAsyncThunk("user/fetchingcirculars", async (_, { rejectWithValue }) => {
    try {
        console.log('Circulars Data Slice with ID', getCircularsData)
        return await circulars();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Sample Paper Data
export const getSamplePaperData = createAsyncThunk("user/fetchingsamplepaper", async (_, { rejectWithValue }) => {
    try {
        console.log('Sample Paper Data Slice with ID', getSamplePaperData)
        return await samplepaper();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Notification Data
export const getNotificationData = createAsyncThunk("user/fetchingnotification", async (_, { rejectWithValue }) => {
    try {
        console.log('Notification Data Slice with ID', getNotificationData)
        return await notification();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Tc Data
export const getTcData = createAsyncThunk("user/fetchingtc", async (_, { rejectWithValue }) => {
    try {
        console.log('Tc Data Slice with ID', getTcData)
        return await tc();
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// User slice
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        homeData: [],
        principalData: [],
        Headerdata: [],
        Aboutdata: [],
        Gallerydata: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder


            .addCase(getdata.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getdata.fulfilled, (state, action) => {
                console.log("0w5984985034", action.payload);
                state.status = 'succeeded';
                state.homeData = action.payload;

                console.log("39-4583-453", state.homeData);

                // Store fetched data
            })
            .addCase(getdata.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            .addCase(principaldata.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(principaldata.fulfilled, (state, action) => {
                state.status = 'succeeded';

                state.principalData = action.payload; // Store fetched data
                console.log('state.principalData', state.principalData)
            })
            .addCase(principaldata.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;

            })

            //   Header content
            .addCase(getHeaderdata.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getHeaderdata.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('Header Payload', action.payload);
                state.Headerdata = action.payload;
                console.log('state.getHeaderdata', state.Headerdata);
            })
            .addCase(getHeaderdata.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //   About Us content
            .addCase(getAboutdata.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAboutdata.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('About Payload', action.payload);
                state.Aboutdata = action.payload;
                console.log('state.getAboutdata', state.Aboutdata);
            })
            .addCase(getAboutdata.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //  Gallery content
            .addCase(getGallerydata.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getGallerydata.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('Gallery Payload', action.payload);
                state.Gallerydata = action.payload;
                console.log('state.getGallerydata', state.Gallerydata);
            })
            .addCase(getGallerydata.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // faq
            .addCase(getFaqData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getFaqData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.faqData = action.payload;
            })
            .addCase(getFaqData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })




    },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;