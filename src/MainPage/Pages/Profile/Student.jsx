/**
 * TermsCondition Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_02, Avatar_05, Avatar_09, Avatar_10, Avatar_16 } from '../../../Entryfile/imagepath'

import Moment from 'moment';
import { DatePicker } from 'antd';
var axios = require('axios');
var baseurl = 'https://aadhaan.ddns.net'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import Circle from 'react-circle';
import { countries } from 'country-data-list';
import $ from "jquery";
import ReactDOM from 'react-dom';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import worldMapData from 'city-state-country'
// You can also use
import { lookup } from 'country-data-list';
import { buildTimeColsModel } from '@fullcalendar/timegrid';


// var FormData = require('form-data');
// var fs = require('fs');
var bankdata = {
    "AXIS BANK": "AXIS",
    "BANK OF AMERICA": "BOA",
    "BANK OF INDIA": "BOI",
    "YES BANK": "YESBANK",
    "THE ANDHRA PRADESH STATE COOPERATIVE BANK LIMITED": "APCOB",
    "THE NASIK MERCHANTS COOPERATIVE BANK LIMITED": "NAMCOBANK",
    "APNA SAHAKARI BANK LIMITED": "APNABANK",
    "AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED": "ANZ",
    "CAPITAL SMALL FINANCE BANK LIMITED": "CAPITALBANK",
    "BANK OF MAHARASHTRA": "BOM",
    "JALGAON JANATA SAHAKARI BANK LIMITED": "JJSBL",
    "JANATA SAHAKARI BANK LIMITED": "JANATABANK",
    "KALLAPPANNA AWADE ICHALKARANJI JANATA SAHAKARI BANK LIMITED": "IJSBANK",
    "THE MUMBAI DISTRICT CENTRAL COOPERATIVE BANK LIMITED": "MDCCBANK",
    "PRIME COOPERATIVE BANK LIMITED": "PRIMEBANK",
    "THE THANE BHARAT SAHAKARI BANK LIMITED": "THANEBHARATBANK",
    "THE A.P. MAHESH COOPERATIVE URBAN BANK LIMITED": "APMAHESHBANK",
    "BANK OF TOKYO MITSUBISHI LIMITED": "MUFG",
    "THE GUJARAT STATE COOPERATIVE BANK LIMITED": "GSCBANK",
    "KARNATAKA VIKAS GRAMEENA BANK": "KVGBANK",
    "THE MUNICIPAL COOPERATIVE BANK LIMITED": "MUNICIPALBANK",
    "NAGPUR NAGARIK SAHAKARI BANK LIMITED": "NNSBANK",
    "THE KANGRA CENTRAL COOPERATIVE BANK LIMITED": "KCCB",
    "THE RAJASTHAN STATE COOPERATIVE BANK LIMITED": "RSCB",
    "THE SURAT DISTRICT COOPERATIVE BANK LIMITED": "SUDICOBANK",
    "THE VISHWESHWAR SAHAKARI BANK LIMITED": "VISHWESHWARBANK",
    "WOORI BANK": "WOORIBANK",
    "SUTEX COOPERATIVE BANK LIMITED": "SUTEXBANK",
    "BARCLAYS BANK": "BARCLAYS",
    "GURGAON GRAMIN BANK": "SHGB",
    "COMMONWEALTH BANK OF AUSTRALIA": "COMMBANK",
    "PRATHAMA BANK": "PRATHAMABANK",
    "NORTH MALABAR GRAMIN BANK": "KERALAGBANK",
    "THE VARACHHA COOPERATIVE BANK LIMITED": "VARACHHABANK",
    "SBER BANK": "SBERBANK",
    "TUMKUR GRAIN MERCHANTS COOPERATIVE BANK LIMITED": "TGMCBANK",
    "VASAI VIKAS SAHAKARI BANK LIMITED": "VASAIVIKASBANK",
    "VASAI VIKAS SAHAKARI BANK LTD": "VASAIVIKASBANK",
    "BASSEIN CATHOLIC COOPERATIVE BANK LIMITED": "BCCB",
    "WESTPAC BANKING CORPORATION": "WESTPAC",
    "ANDHRA PRAGATHI GRAMEENA BANK": "APGB",
    "SUMITOMO MITSUI BANKING CORPORATION": "SMBC",
    "THE SEVA VIKAS COOPERATIVE BANK LIMITED": "SEVAVIKASBANK",
    "THE THANE DISTRICT CENTRAL COOPERATIVE BANK LIMITED": "THANEDISTRICTBANK",
    "JP MORGAN BANK": "JPMORGAN",
    "THE GADCHIROLI DISTRICT CENTRAL COOPERATIVE BANK LIMITED": "GDCCBANK",
    "THE AKOLA DISTRICT CENTRAL COOPERATIVE BANK": "AKOLADCC",
    "THE KURMANCHAL NAGAR SAHAKARI BANK LIMITED": "KURMANCHALBANK",
    "THE JALGAON PEOPELS COOPERATIVE BANK LIMITED": "JPCBANK",
    "PARIBAS": "BNPPARIBAS",
    "NATIONAL AUSTRALIA BANK LIMITED": "NAB",
    "SAHEBRAO DESHMUKH COOPERATIVE BANK LIMITED": "SDCBANK",
    "BANK INTERNASIONAL INDONESIA": "MAYBANK",
    "SOLAPUR JANATA SAHAKARI BANK LIMITED": "SJSBBANK",
    "INDUSTRIAL AND COMMERCIAL BANK OF CHINA LIMITED": "ICBC",
    "UNITED OVERSEAS BANK LIMITED": "UOB",
    "ZILA SAHAKRI BANK LIMITED GHAZIABAD": "ZSBL",
    "JANASEVA SAHAKARI BANK BORIVLI LIMITED": "JANASEVABANK",
    "RAJGURUNAGAR SAHAKARI BANK LIMITED": "RAJGURUNAGARBANK",
    "CANARA BANK": "CANARABANK",
    "NAGAR URBAN CO OPERATIVE BANK": "NUCB",
    "AKOLA JANATA COMMERCIAL COOPERATIVE BANK": "AKOLAJANATABANK",
    "BHARATIYA MAHILA BANK LIMITED": "BMB",
    "HSBC BANK OMAN SAOG": "HSBC",
    "THE KANGRA COOPERATIVE BANK LIMITED": "KANGRABANK",
    "THE ZOROASTRIAN COOPERATIVE BANK LIMITED": "ZOROASTRIANBANK",
    "SHIKSHAK SAHAKARI BANK LIMITED": "SHIKSHAKBANK",
    "THE HASTI COOP BANK LTD": "HASTIBANK",
    "CATHOLIC SYRIAN BANK LIMITED": "CSB",
    "KERALA GRAMIN BANK": "KERALAGBANK",
    "PRAGATHI KRISHNA GRAMIN BANK": "PRAGATHIKRISHNABANK",
    "DEPOSIT INSURANCE AND CREDIT GUARANTEE CORPORATION": "DICGC",
    "DEVELOPMENT BANK OF SINGAPORE": "DBS",
    "DOHA BANK": "DOHABANK",
    "DOHA BANK QSC": "DOHABANK",
    "EXPORT IMPORT BANK OF INDIA": "EXIMBANK",
    "JANAKALYAN SAHAKARI BANK LIMITED": "JKSBL",
    "TJSB SAHAKARI BANK LIMITED": "TJSBBANK",
    "TJSB SAHAKARI BANK LTD": "TJSBBANK",
    "THE COSMOS CO OPERATIVE BANK LIMITED": "COSMOSBANK",
    "SURAT NATIONAL COOPERATIVE BANK LIMITED": "SURATNATIONALBANK",
    "CENTRAL BANK OF INDIA": "CENTRALBANK",
    "IDFC BANK LIMITED": "IDFC",
    "INDUSTRIAL BANK OF KOREA": "IBK",
    "SBM BANK MAURITIUS LIMITED": "SBM",
    "NATIONAL BANK OF ABU DHABI PJSC": "NBAD",
    "KEB HANA BANK": "KEBHANA",
    "THE PANDHARPUR URBAN CO OP. BANK LTD. PANDHARPUR": "PANDHARPURBANK",
    "SAMARTH SAHAKARI BANK LTD": "SAMARTHBANK",
    "SHIVALIK MERCANTILE CO OPERATIVE BANK LTD": "SHIVALIKBANK",
    "HIMACHAL PRADESH STATE COOPERATIVE BANK LTD": "HPSCB",
    "DEOGIRI NAGARI SAHAKARI BANK LTD. AURANGABAD": "DEOGIRIBANK",
    "CHINATRUST COMMERCIAL BANK LIMITED": "CHINATRUST",
    "PT BANK MAYBANK INDONESIA TBK": "MAYBANK",
    "MAHARASHTRA GRAMIN BANK": "MAHAGRAMIN",
    "EQUITAS SMALL FINANCE BANK LIMITED": "EQUITAS",
    "AIRTEL PAYMENTS BANK LIMITED": "AIRTEL",
    "CITI BANK": "CITIBANK",
    "CITIZEN CREDIT COOPERATIVE BANK LIMITED": "CITIZENCREDITBANK",
    "CITY UNION BANK LIMITED": "CUB",
    "CORPORATION BANK": "CORPBANK",
    "CREDIT AGRICOLE CORPORATE AND INVESTMENT BANK CALYON BANK": "CACIB",
    "DENA BANK": "DENABANK",
    "DEUSTCHE BANK": "DB",
    "DCB BANK LIMITED": "DCB",
    "DHANALAKSHMI BANK": "DHANBANK",
    "DOMBIVLI NAGARI SAHAKARI BANK LIMITED": "DNSBANK",
    "FIRSTRAND BANK LIMITED": "FIRSTRAND",
    "HDFC BANK": "HDFC",
    "HSBC BANK": "HSBC",
    "ICICI BANK LIMITED": "ICICI",
    "IDBI BANK": "IDBI",
    "INDIAN BANK": "INDIANBANK",
    "INDIAN OVERSEAS BANK": "IOB",
    "INDUSIND BANK": "INDUSIND",
    "JANASEVA SAHAKARI BANK LIMITED": "JANASEVABANK",
    "KAPOL COOPERATIVE BANK LIMITED": "KAPOLBANK",
    "KARNATAKA BANK LIMITED": "KARNATAKABANK",
    "KARUR VYSYA BANK": "KVB",
    "KOTAK MAHINDRA BANK LIMITED": "KOTAK",
    "MAHANAGAR COOPERATIVE BANK": "MAHANAGARBANK",
    "MAHARASHTRA STATE COOPERATIVE BANK": "MSCBANK",
    "MASHREQBANK PSC": "MASHREQBANK",
    "MIZUHO BANK LTD": "MIZUHOBANK",
    "NEW INDIA COOPERATIVE BANK LIMITED": "NEWINDIABANK",
    "NKGSB COOPERATIVE BANK LIMITED": "NKGSB",
    "NUTAN NAGARIK SAHAKARI BANK LIMITED": "NUTANBANK",
    "ORIENTAL BANK OF COMMERCE": "OBC",
    "PARSIK BANK": "GPPARSIKBANK",
    "PUNJAB AND MAHARSHTRA COOPERATIVE BANK": "PMC",
    "PUNJAB AND SIND BANK": "PSB",
    "PUNJAB NATIONAL BANK": "PNB",
    "RAJKOT NAGRIK SAHAKARI BANK LIMITED": "RNSB",
    "RESERVE BANK OF INDIA": "RBI",
    "SHINHAN BANK": "SHINHAN",
    "SOCIETE GENERALE": "SOCIETEGENERALE",
    "SOUTH INDIAN BANK": "SOUTHINDIANBANK",
    "STANDARD CHARTERED BANK": "SC",
    "STATE BANK OF BIKANER AND JAIPUR": "SBBJ",
    "STATE BANK OF HYDERABAD": "SBHYD",
    "STATE BANK OF INDIA": "SBI",
    "STATE BANK OF MAURITIUS LIMITED": "SBMGROUP",
    "STATE BANK OF MYSORE": "SBM",
    "STATE BANK OF PATIALA": "SBP",
    "STATE BANK OF TRAVANCORE": "SBT",
    "SYNDICATE BANK": "SYNDICATEBANK",
    "TAMILNAD MERCANTILE BANK LIMITED": "TMBL",
    "THE BANK OF NOVA SCOTIA": "SCOTIABANK",
    "AHMEDABAD MERCANTILE COOPERATIVE BANK": "AMCOBANK",
    "BHARAT COOPERATIVE BANK MUMBAI LIMITED": "BHARATBANK",
    "FEDERAL BANK": "FEDERALBANK",
    "THE GREATER BOMBAY COOPERATIVE BANK LIMITED": "GREATERBANK",
    "JAMMU AND KASHMIR BANK LIMITED": "JKBANK",
    "KALUPUR COMMERCIAL COOPERATIVE BANK": "KALUPURBANK",
    "THE KARANATAKA STATE COOPERATIVE APEX BANK LIMITED": "KARNATAKAAPEX",
    "KALYAN JANATA SAHAKARI BANK": "KALYANJANATA",
    "LAXMI VILAS BANK": "LVB",
    "THE MEHSANA URBAN COOPERATIVE BANK": "MUCBANK",
    "THE NAINITAL BANK LIMITED": "NAINITALBANK",
    "RBL BANK LIMITED": "RBL",
    "THE ROYAL BANK OF SCOTLAND": "RBS",
    "SARASWAT COOPERATIVE BANK LIMITED": "SARASWATBANK",
    "THE SHAMRAO VITHAL COOPERATIVE BANK": "SVCBANK",
    "THE SURATH PEOPLES COOPERATIVE BANK LIMITED": "SPCBL",
    "THE TAMIL NADU STATE APEX COOPERATIVE BANK": "TNSCBANK",
    "THE WEST BENGAL STATE COOPERATIVE BANK": "WBSCB",
    "UCO BANK": "UCOBANK",
    "UNION BANK OF INDIA": "UNIONBANK",
    "UNITED BANK OF INDIA": "UNITEDBANK",
    "VIJAYA BANK": "VIJAYABANK"
}
var banklist = Object.keys(bankdata);
banklist = banklist.sort();
export default class Student extends Component {
    constructor(...props) {
        super(...props)
        if (localStorage.getItem("count") == 2) {
            window.location.reload(false);
            localStorage.setItem("count", 3);
        }
        this.setStartDate = this.setStartDate.bind(this);
        this.onFileChangeForDoc = this.onFileChangeForDoc.bind(this);
        this.setDocName = this.setDocName.bind(this);
        console.log("constructor",)
        var listdd = worldMapData.getAllCountries()
        console.log("constructor",)
        var india1 = { "id": 1000, "sortname": "uu", "name": "Select Country", "phoneCode": 91 }
        var india = { "id": 101, "sortname": "IN", "name": "India", "phoneCode": 91 }

        listdd.unshift(india)
        listdd.unshift(india1)
        // if(typeof this.props.location.state.back===undefined)
        // {
        this.state = {
            isProfile: false,
            otherdetolsFlag: false,
            refflag: false,
            canid: '',
            expflag: false,
            bankflag: false,
            familyflag: false,
            eductionFlag: false,
            eductionerro: '',
            isopenProfileModel: false,
            isLoaded: false,
            name: '',
            experror: '',
            errorp: '',
            bankerror: '',
            pallcountry: listdd,
            callcountry: listdd,
            edulevel: '10',
            error: '',
            stateListOfCountry: [],
            pstateListOfCountry: [],
            recruiter_name: '',
            recruiter_employee_id: '',
            other_details_id: '',
            profilepic: Avatar_02,
            alternate_mobile_no: '',
            designation: '',
            profilepic1: 'null',
            client: null,
            signn: null,
            father_name: '',
            department: '',
            job_location: '',
            zone: '',
            isSigle: false,
            u_state: '',
            source: '',
            user: localStorage.getItem("can"),
            created_by: 1,
            isd: "91",
            mobile_no: '',
            user_type: '',
            c_country: '',
            c_state: '',
            c_city: '',
            c_house_no: '',
            c_full_address: '',
            c_mobile_no: '',
            c_email: '',
            c_pin_code: '',
            p_country: '',
            p_state: '',
            p_city: '',
            p_house_no: '',
            p_full_address: '',
            p_mobile_no: '',
            p_email: '',
            p_pin_code: '',
            dob: '',
            marital_status: '',
            marrage_date: '',
            gender: "",
            category: "",
            nationality: "",
            blood_group: "",
            mother_tongue: "",
            religion: "",
            profile_percent: 0,
            contperson: '',
            branch_name: '',
            account_number: '',
            ifsc_code: '',
            bank_name: '',
            reference: [],
            family: [],
            ref_name: '',
            ref_relation: '',
            ref_no: '',
            ref_loc: '',
            jobtype: '',
            candidate_other_data: { name: '', esic_address: '', esic_name: '', esic_no: '', uan: '', pf_no: '', aadhaar_no: '', eid_no: '', pan_card_no: '', vehicle_no: '', valid_up_to: '', place_of_issue: '', dl_no: '' },
            education_data: {},
            candidate_work_history_data: [],
            candidate_documents_data: [],
            candidate_doc_list: ['Adhaar Card Front', 'Adhaar Card Back', 'Resume/ Bio-DATA', 'Passport Size Photo', 'Passbook', 'Signature', 'Driving License Front', 'Driving License Back', 'Pan Card', 'Ration Card', 'Rent Agreement', 'Marriage Certificate', 'Thumb Impression'],
            isNomniee: false,
            family_adhar: '',
            family_name: '',
            family_relation: '',
            family_dob: '',
            exprienceDesignation: '',
            experienceOrgination: '',
            reasonforSep: '',
            startDate_emp: '',
            enddate_emp: '',
            degree: '',
            board: '',
            othererror: '',
            percentage: '',
            edu_location: '',
            passing_year: '',
            school: '',
            edutype: '',
            resume_file: '',
            docname: '',
            error1: "",
            src: null,
            crop: {
                unit: '%',
                width: 30,
                aspect: 16 / 9,
            },
            errormain: "",
            emergencyNo: '',
            referror: '',
            addrefvar: true,
            addfamilyvar: true,
            eduvar: true,
            expvar: true

            // maxDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 27)



        }
        // }else{
        //   this.state = this.props.location.state
        // }


    }


    onSelectFile = e => {
        // if (e.target.files && e.target.files.length > 0) {
        //     const reader = new FileReader();
        //     reader.addEventListener('load', () =>
        //         this.setState({ src: reader.result })
        //     );
        //     reader.readAsDataURL(e.target.files[0]);
        // }
        try {
            console.log("files", e.target.files)
            var files = e.target.files;
            console.log("files", JSON.stringify(files))
            const value = files[0];
            console.log("files", value.size)
            if (value.size > 10048576) {
                alert("File is too big!");
                this.value = "";

            } else {
                this.setState({ resume_file: value });
            }
            // alert("got data"+value)


        } catch (err) {
            console.log("error", err)
            // document.getElementById("demo").innerHTML = err.message;
        }
    };

    // If you setState the crop in here you should return false.
    onImageLoaded = image => {
        this.imageRef = image;
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                'newFile.jpeg'
            );
            this.setState({ croppedImageUrl });
        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error('Canvas is empty');
                    return;
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, 'image/jpeg');
        });
    }




    isBlank = (data) => {
        if (data == '' || data == "" || data == null || data == 'null') {
            return true
        } else {
            return false
        }
    }
    addBasicDetails = (e) => {
        e.preventDefault();
        this.setState({ errormain: "This field can not be empty" })
        this.addProfileData(this, this.state)

    }

    addPersonalInfoData = (e) => {
        e.preventDefault();
        console.log("clickfound")
        this.setState({ errorp: "This field can not be empty" })
        this.addpersonalInfo(this, this.state);
    }

    addBankDetails = (e) => {

        e.preventDefault();
        console.log("clickfound")
        this.setState({ bankerror: "This field can not be empty" })
        this.addBank(this, this.state.bank_name, this.state.branch_name, this.state.account_number, this.state.ifsc_code, this.state.user);
    }

    //add education data
    setDegree = (e) => {
        const value = e.target.value;
        this.setState({ degree: value });
    }
    setBoard = (e) => {
        const value = e.target.value;
        this.setState({ board: value });
    }
    setSchool = (e) => {
        const value = e.target.value;
        this.setState({ school: value });
    }
    setLocationEducation = (e) => {
        const value = e.target.value;
        this.setState({ location: value });
    }
    setPassingYear = (e) => {
        const value = e.target.value;
        this.setState({ passing_year: value });
    }
    setPercentage = (e) => {
        const value = e.target.value;
        this.setState({ percentage: value });
    }

    addEducationData = (e) => {
        e.preventDefault();
        this.setState({ eductionerro: "This field can not be empty" })
        var data = { "degree": this.state.degree, "board_university": this.state.board, "school": this.state.school, "location": this.state.location, "passing_year": this.state.passing_year, "percentage": this.state.percentage ? this.state.percentage : 0, "candidate": this.state.user, "education_level": this.state.edulevel }
        var data1 = { 'candidate': this.state.user }
        let final = {
            ...data,
            ...data1
        };
        if (this.state.edulevel == '0') {

            this.setState({ error: "Please select education level" })
            // console.log("valuee")
        } else {
            this.addEducation(this, final);
        }

    }
    //end education data
    //experience data
    setExperienceOrgination = (e) => {
        const value = e.target.value;
        this.setState({ experienceOrgination: value });
    }
    setExprienceDesignation = (e) => {
        const value = e.target.value;
        this.setState({ exprienceDesignation: value });
    }
    setReason = (e) => {
        const value = e.target.value;
        this.setState({ reasonforSep: value });
    }
    setStartDate(e) {
        // alert("change",e)
        const value = e.format();
        this.setState({ startDate_emp: Moment(value).format('YYYY-MM-DD') });
    }
    setEndDate = (e) => {
        const value = e.format();

        this.setState({ enddate_emp: Moment(value).format('YYYY-MM-DD') });
    }
    addExperienceData = (e) => {
        e.preventDefault();
        this.setState({ experror: "This field can not be empty" })
        var data = { "organization": this.state.experienceOrgination, "designation": this.state.exprienceDesignation, "reason_for_leaving": this.state.reasonforSep, "candidate": this.state.user, "start_date": this.state.startDate_emp, "end_date": this.state.enddate_emp }

        var data1 = { 'candidate': this.state.user }
        let final = {
            ...data,
            ...data1
        };
        this.addExperience(this, final);
    }
    //end experience data
    addOtherDetails = (e) => {
        e.preventDefault();
        this.setState({ othererror: "This field can not be empty" })
        var data = this.state.candidate_other_data
        var data1 = { 'candidate': this.state.user, 'other_detail_id': this.state.other_details_id }
        let final = {
            ...data,
            ...data1
        };
        // alert("jhhhh")
        this.addOtherDetailsData(this, final)
    }
    setNameAsDl = (e) => {

        e.preventDefault();
        const value = e.target.value;
        var data = { "name": value, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
    }
    setNameAsDlNo = (e) => {

        e.preventDefault();
        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": value }
        this.setState({ candidate_other_data: data });
    }
    setplaceOfIssue = (e) => {
        e.preventDefault();
        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": value, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });

    }
    setValidUpto = (e) => {
        e.preventDefault();
        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": value, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });

    }
    setVehicleNo = (e) => {
        e.preventDefault();
        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": value, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
    }
    setPanNo = (e) => {
        e.preventDefault();
        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": value, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
    }
    setEidNo = (e) => {
        e.preventDefault();
        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": value, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
    }
    setAdharNo = (e) => {
        e.preventDefault();
        const re = /^[0-9]+$/;
        const value = e.target.value;
        // alert("got data"+value)

        // const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": value, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        if (value === '' || value.match(re)) {
            this.setState({ candidate_other_data: data });
        }

    }
    setEsicAdd = (e) => {


        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": value, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
    }
    setEsicName = (e) => {


        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": value, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
    }
    setEsicNo = (e) => {


        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": value, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
    }
    setUan = (e) => {


        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": value, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
    }
    setPf = (e) => {


        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": value, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": this.state.candidate_other_data.pan_card_no, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
    }
    setBankName = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ bank_name: value });
    }
    setBranchName = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ branch_name: value });
    }
    setIfsc_Code = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ ifsc_code: value });
    }
    setAccountNo = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ account_number: value });
    }
    setName = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ name: value });

    }


    setFat_Name = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ father_name: value });

    }
    setDob = (e) => {
        const value = e.format();

        this.setState({ dob: Moment(value).format('YYYY-MM-DD') });

    }
    setgender = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ gender: value });

    }
    setcurrentFullAdd = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ c_full_address: value });

    }
    setcurrentState = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ c_state: value });

    }
    setcurrentCity = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ c_city: value, job_location: value });

    }
    setPermnanetCity = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ p_city: value, job_location: value });

    }
    onFileChange = (e) => {

        // const value = e.target.file[0];
        //  var files = e.target.files;
        // console.log("files",value)
        console.log("files", e.target.files)
        var files = e.target.files;
        console.log("files", JSON.stringify(files))
        const value = files[0];
        // alert("got data"+value)

        // this.setState({resume_file:value });
        // const value = files[0];
        // alert("got data"+value)

        this.setState({ profilepic: URL.createObjectURL(value) });
        this.setState({ profilepic1: value });
    }
    onFileChangeForDoc(e) {
        try {
            console.log("files", e.target.files)
            var files = e.target.files;
            console.log("files", JSON.stringify(files))
            const value = files[0];
            console.log("files", value.size)
            if (value.size > 10048576) {
                alert("File is too big!");
                this.value = "";

            } else {
                this.setState({ resume_file: value });
            }
            e.target.value = null;
            // alert("got data"+value)


        } catch (err) {
            console.log("error", err)
            // document.getElementById("demo").innerHTML = err.message;
        }

    }
    setcurrentCountry = (e) => {
        const value = e.target.value;
        // var france = lookup.countries({name: value});
        // alert("got data"+value)
        // console.log(value,)
        this.setState({ stateListOfCountry: worldMapData.getAllStatesFromCountry(value), c_country: value });

    }
    setcurrentPin = (e) => {

        // alert("got data"+value)
        const re = /^[0-9]+$/;
        const value = e.target.value;
        // alert("got data"+value)
        if (value === '' || value.match(re)) {
            this.setState({ c_pin_code: value });
        }

    }
    setcurrentPhone = (e) => {
        const re = /^[0-9]+$/;
        const value = e.target.value;
        // alert("got data"+value)
        if (value === '' || value.match(re)) {
            this.setState({ c_mobile_no: value });
        }


    }
    setPermanentFullAdd = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ p_full_address: value });

    }
    setPermanentState = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ p_state: value });

    }
    setPermanentPin = (e) => {

        // alert("got data"+value)
        const re = /^[0-9]+$/;
        const value = e.target.value;
        // alert("got data"+value)
        if (value === '' || value.match(re)) {
            this.setState({ p_pin_code: value });
        }

    }
    setPermanentMobile = (e) => {
        // const value = e.target.value;
        const re = /^[0-9]+$/;
        const value = e.target.value;
        // alert("got data"+value)
        if (value === '' || value.match(re)) {
            // alert("got data"+value)

            this.setState({ p_mobile_no: value });
        }

    }
    setDepartment = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ department: value });

    }
    setDesigination = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ designation: value });

    }
    setReferBy = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ created_by: value });

    }
    setPermanentCountry = (e) => {
        const value = e.target.value;

        this.setState({ pstateListOfCountry: worldMapData.getAllStatesFromCountry(value), p_country: value });

    }
    setEmail = (e) => {
      
        const value = e.target.value;
        this.setState({ c_email: value })
    }
    setEname = (e) => {

        const value = e.target.value;
        this.setState({ contperson: value })
    }
    setENum = (e) => {
        const re = /^[0-9]+$/;
        const value = e.target.value;
        // alert("got data"+value)
        if (value === '' || value.match(re)) {
            // alert("got data"+value)

            this.setState({ emergencyNo: value })
        }




    }

    addEducationForm = () => {

    }
    setCategory = (e) => {
        const value = e.target.value;

        this.setState({ category: value })



    }
    setBloodGroup = (e) => {
        const value = e.target.value;
        if (value != 0) {
            this.setState({ blood_group: value.toUpperCase() })
        }


    }
    setMothertounge = (e) => {
        const value = e.target.value;
        this.setState({ mother_tongue: value })

    }
    setMarriageDate = (e) => {
        const value = e.format();

        this.setState({ marrage_date: Moment(value).format('YYYY-MM-DD') });


    }
    setMarriageStatus = (e) => {
        const value = e.target.value;


        if (value != 0) {
            // alert("dfgdgfdf"+ value)
            var isSigle = false;
            if (value != "Single") {
                isSigle = true
            }
            this.setState({ isSigle: isSigle, marital_status: value })
        }


    }
    setReligion = (e) => {
        const value = e.target.value;
        this.setState({ religion: value })

    }
    setNationility = (e) => {
        const value = e.target.value;
        this.setState({ nationality: value })

    }
    //refrerence data
    setReferencename = (e) => {
        const value = e.target.value;
        this.setState({ ref_name: value })
    }
    setReferencerleation = (e) => {
        const value = e.target.value;
        this.setState({ ref_relation: value })
    }
    setReferenceNumber = (e) => {
        // const value = e.target.value;
        const re = /^[0-9]+$/;
        const value = e.target.value;
        // alert("got data"+value)


        if (value === '' || value.match(re)) {
            this.setState({ ref_no: value })
        }

    }
    setReferenceLocation = (e) => {
        const value = e.target.value;
        this.setState({ ref_loc: value })
    }
    addRef = (e) => {
        // referror
        e.preventDefault();
        this.setState({ referror: "This field can not be empty" })
        var data = { "name": this.state.ref_name, "location": this.state.ref_loc, "mobile_no": this.state.ref_no, "candidate": this.state.user, "relationship": this.state.ref_relation }
        this.addReference(this, data);
    }
    //end reference
    //family data
    setIsNominee = (e) => {
        const value = e.target.value;
        this.setState({ isNomniee: value })
    }
    setFamilyName = (e) => {
        const value = e.target.value;
        this.setState({ family_name: value })
    }
    setFamilyRelation = (e) => {
        const value = e.target.value;
        this.setState({ family_relation: value })
    }
    setFamilyDob = (e) => {
        const value = e.format();
        this.setState({ family_dob: Moment(value).format('YYYY-MM-DD') });

    }
    setDocName(value) {
        this.setState({ docname: value })
        $('#document_checklist').modal('show');

        // let val = e.target.dataset.value;
        // console.log("ggggg");
        // alert('hhhhhh')

    }
    setFamilyAdhar = (e) => {
        const re = /^[0-9]+$/;
        const value = e.target.value;
        // alert("got data"+value)


        if (value === '' || value.match(re)) {
            this.setState({ family_adhar: value })
        }
        // const value = e.target.value;

    }



    sameAddDAta = (e) => {
        console.log("qqq")
        if (e.target.checked) {
            this.setState({
                p_full_address: this.state.c_full_address,
                p_city: this.state.c_city,
                p_country: this.state.c_country,
                p_state: this.state.c_state, pstateListOfCountry: this.state.stateListOfCountry,
                p_pin_code: this.state.c_pin_code,
                p_mobile_no: this.state.c_mobile_no,
                job_location: this.state.job_location,
                p_email: this.state.c_email
            })
        }

    }



    addFamilyData = (e) => {
        e.preventDefault();
        this.setState({ error1: "This field can not be empty" })
        var data = { "relation": this.state.family_relation, "name": this.state.family_name, "aadhaar_no": this.state.family_adhar, "dob": Moment(this.state.family_dob).format("YYYY-MM-DD"), "is_nominee": this.state.isNomniee, "candidate": this.state.user }
        console.log("dayyaya", data)
        this.addFamily(this, data);
    }
    previewClick = (e) => {
        let path = './applcation-form';
        // var id = this.props.location.state.id
        // alert("iiiiid",id)
        // console.log("hhhhhhhhh",id)
        // this.setState({id:id });
        if ((this.state.candidate_documents_data.length > 6) && (this.state.isProfile) && (this.state.otherdetolsFlag) && (this.state.bankflag)) {
            this.props.history.push({
                pathname: path,
                state: this.state

            })
        } else {
            this.setState({ errorp: "This field cant not be empty", bankerror: "This field cant not be empty", errormain: 'This field cant not be empty' })
            Swal.fire(
                'Fill all required field ',
                '',
                'error'
            )
        }




    }
    pfClick = (e) => {
        let path = './declaration-form';
        // var id=this.props.location.state.id
        // alert("iiiiid",id)
        // console.log("hhhhhhhhh",id)
        // this.setState({id:id });

        this.props.history.push({
            pathname: path,
            state: this.state

        })

    }
    addrow = (e, value) => {
        var addrefvar = false;
        var family = false;
        if (value == "1") {
            addrefvar = true;
        } else {
            addrefvar = false;
        }
        if (value == "2") {
            family = true;
        } else {
            family = false;
        }
        var edu = false
        if (value == "3") {
            edu = true;
        } else {
            edu = false;
        }
        var exp = false
        if (value == "4") {
            exp = true;
        } else {
            exp = false;
        }
        this.setState({
            expvar: exp, eduvar: edu, addfamilyvar: family, addrefvar: addrefvar, eductionerro: '', degree: '', school: '', experror: '', edu_location: '', passing_year: '', percentage: '', board: '', ref_name: '', ref_loc: '', ref_relation: '', ref_no: '', error: '',

            family_adhar: '',
            family_name: '',
            family_relation: '',
            family_adhar: '',
            isNomniee: false,
            family_dob: undefined,
            experienceOrgination: '', exprienceDesignation: '', reasonforSep: '', enddate_emp: '', startDate_emp: '',
        });
        this.apicall()
    }
    esiClick = (e) => {
        let path = './Esic-declrationForm';

        this.props.history.push({
            pathname: path,
            state: this.state

        })

    }

    gratitutyClick = (e) => {
        let path = './Gratituty-form';


        this.props.history.push({
            pathname: path,
            state: this.state

        })

    }
    apicall = () => {

        var url1 = 'https://aadhaan.ddns.net/api/candidate/full-information/' + this.state.user
        var url = 'https://aadhaan.ddns.net/api/candidate/dashboard';
        var config = {
            method: 'get',
            url: url1,
            headers: {
                'Content-Type': 'application/json',



            },
            data: ''
        };

        axios(config)
            .then((response) => {
                console.log("fgdfgfggf")
                var data = response.data;
                console.log("fgdfgfggf", data)

                try {


                    var candidate_education_data_len = Object.keys(data.candidate_education_data).length
                    if (candidate_education_data_len > 0) {
                        var candidate_education_data = data.candidate_education_data
                        this.setState(
                            {
                                // eduvar:false,
                                education_data: candidate_education_data
                            }
                        );
                        console.log("educationdata", candidate_education_data);
                    }


                } catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }
                try {
                    var candidate_bank_data_len = Object.keys(data.candidate_bank_data).length
                    if (candidate_bank_data_len > 0) {
                        var candidate_bank_data = data.candidate_bank_data
                        this.setState({

                            bankflag: true,
                            bank_name: candidate_bank_data.bank_name.toUpperCase(),
                            branch_name: candidate_bank_data.branch_name,
                            account_number: candidate_bank_data.account_number,
                            ifsc_code: candidate_bank_data.ifsc_code,
                            canid: candidate_bank_data.candidate


                        });
                    }
                } catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }

                try {
                    var basic_details_len = Object.keys(data.candidate_personal_data.basic_details).length
                    var basic_details = data.candidate_personal_data.basic_details
                    if (basic_details_len > 0) {
                        this.setState({
                            isLoaded: true,
                            isProfile: true,
                            name: basic_details.name.toUpperCase(),
                            alternate_mobile_no: basic_details.alternate_mobile_no,
                            designation: basic_details.designation,
                            client: basic_details.client,
                            father_name: basic_details.father_name.toUpperCase(),
                            department: basic_details.department,
                            job_location: basic_details.job_location,
                            zone: basic_details.zone,
                            u_state: basic_details.u_state,
                            source: basic_details.source,
                            user: basic_details.user,
                            profile_percent: basic_details.profile_percent,
                            created_by: basic_details.created_by,
                            isd: basic_details.isd,
                            mobile_no: basic_details.mobile_no,
                            user_type: basic_details.user_type,
                            recruiter_name: basic_details.recruiter_name,
                            created_by: basic_details.recruiter_id,
                            recruiter_employee_id: basic_details.recruiter_employee_id,
                            jobtype: basic_details.job_type,
                            contperson: basic_details.emergency_contact_name,
                            emergencyNo: basic_details.emergency_contact_number,
                            c_email:basic_details.email,
                            // profile_picture

                            profilepic: "https://aadhaan.ddns.net" + basic_details.profile_picture

                        });
                    }
                }
                catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }
                try {
                    var current_address_data_len = Object.keys(data.candidate_personal_data.address_details.current_address_data).length
                    var current_address_data = data.candidate_personal_data.address_details.current_address_data
                    if (current_address_data_len > 0) {
                        this.setState({
                            c_country: current_address_data.country,
                            c_state: current_address_data.state,
                            c_city: current_address_data.city,
                            c_house_no: current_address_data.house_no,
                            c_full_address: current_address_data.full_address,
                            c_mobile_no: current_address_data.mobile_no,
                            // c_email: current_address_data.email,
                            c_pin_code: current_address_data.pin_code,
                            stateListOfCountry: worldMapData.getAllStatesFromCountry(current_address_data.country)

                            // allcountry:[current_address_data.country],
                            // stateListOfCountry:[current_address_data.state]


                        });
                    }
                }


                catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }
                try {
                    var permanent_address_data_len = Object.keys(data.candidate_personal_data.address_details.permanent_address_data).length



                    var permanent_address_data = data.candidate_personal_data.address_details.permanent_address_data

                    console.log('111111', permanent_address_data)



                    if (permanent_address_data_len > 0) {
                        this.setState({
                            p_country: permanent_address_data.country,
                            p_state: permanent_address_data.state,
                            p_city: permanent_address_data.city,
                            p_house_no: permanent_address_data.house_no,
                            p_full_address: permanent_address_data.full_address,
                            p_mobile_no: permanent_address_data.mobile_no,
                            p_email: permanent_address_data.email,
                            p_pin_code: permanent_address_data.pin_code,
                            pstateListOfCountry: worldMapData.getAllStatesFromCountry(permanent_address_data.country)

                        });
                    }
                }

                catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }


                try {
                    var other_details_len = Object.keys(data.candidate_personal_data.other_details).length
                    if (other_details_len > 0) {
                        var other_details = data.candidate_personal_data.other_details
                        var single = other_details.marital_status
                        if (single == 'un_married') {
                            single = "Single";
                        }else
                        {
                            single = "Married";
                        }
                        this.setState({

                            dob: Moment(other_details.dob).format("YYYY/MM/DD"),
                            otherdetolsFlag: true,
                            marital_status: single,
                            marrage_date: other_details.marrage_date,
                            gender: other_details.gender,
                            category: other_details.category,
                            nationality: other_details.nationality,
                            blood_group: other_details.blood_group,
                            mother_tongue: other_details.mother_tongue,
                            religion: other_details.religion


                        });
                    }
                } catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }

                try {
                    var candidate_reference_data = data.candidate_reference_data.reference.length

                    if (candidate_reference_data > 0) {
                        var candidate_reference_data = data.candidate_reference_data.reference


                        this.setState({
                            refflag: true,
                            // addrefvar:false,
                            reference: candidate_reference_data

                        });
                    }
                } catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }
                try {
                    var candidate_family_data = data.candidate_family_data.family.length
                    if (candidate_family_data > 0) {
                        var candidate_family_data = data.candidate_family_data.family
                        this.setState({
                            // addfamilyvar:false,

                            familyflag: true,
                            family: candidate_family_data

                        });
                    }
                } catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }
                try {
                    console.log(data.candidate_other_data.id, "hgfkdshfgdhkgkfhgkhfjkjhfdjdgfhkjhffjkhdg", data.candidate_other_data)
                    var candidate_other_data_len = Object.keys(data.candidate_other_data).length
                    if (candidate_other_data_len > 0) {
                        var candidate_other_data = data.candidate_other_data

                        this.setState({
                            other_details_id: candidate_other_data.id,
                            candidate_other_data: candidate_other_data

                        });
                    }
                } catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }
                try {
                    var candidate_work_history_data_len = data.candidate_work_history_data.work_experience.length

                    if (candidate_work_history_data_len > 0) {
                        var candidate_work_history_data = data.candidate_work_history_data.work_experience

                        this.setState({
                            // expvar:false,
                            candidate_work_history_data: candidate_work_history_data

                        });
                    }
                    var candidate_documents_data_len = data.candidate_documents_data.document.length
                    if (candidate_documents_data_len > 0) {
                        var candidate_documents_data = data.candidate_documents_data.document
                        // console.log("hgjdhjgfgjhjfhj", candidate_documents_data)

                        this.setState({

                            candidate_documents_data: candidate_documents_data

                        });
                    }
                } catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }
                try {
                    var candidate_documents_data_len = data.candidate_documents_data.document.length
                    if (candidate_documents_data_len > 0) {
                        var candidate_documents_data = data.candidate_documents_data.document
                        console.log("hgjdhjgfgjhjfhj", candidate_documents_data)
                        var sign = null;
                        // if(candidate_documents_data.document_type=="Signature"){
                        //   sign=""+candidate_documents_data.document
                        // }

                        this.setState({

                            candidate_documents_data: candidate_documents_data

                        });
                        // signn
                    }
                } catch (err) {
                    console.log("error", err)
                    // document.getElementById("demo").innerHTML = err.message;
                }
                try {
                    // var recruiter_information = data.recruiter_information.length
                    // if (recruiter_information > 0) {
                    console.log("recuriter", data.recruiter_information.employee_id, data.recruiter_information.employee_id)
                    this.setState({

                        created_by: data.recruiter_information.user,
                        recruiter_employee_id: data.recruiter_information.employee_id

                    });
                    // signn
                    // }
                } catch (err) {
                    console.log("recuriter", err)

                }

            })
            .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                console.log("error");
            });

    }
    //endfamily data
    componentDidMount = () => {
        this.apicall();
        // window.scrollTo(0, -1000)


    }
    educationChane = (e) => {
        // alert("click")
        var val = e.target.value;

        this.setState({ edulevel: val })
        console.log("click", val)


    }
    uploadDoc = (e) => {
        e.preventDefault();
        console.log("click")
        var datat = this.state.resume_file
        console.log("datat", datat)

        // var d='Resume/ Bio-DATA'
        var d = this.state.docname
        if (datat == '') {
            Swal.fire(
                '',
                'Please select file',
                'error'
            )
            return
        }

        this.documentUpload(this, datat, d, this.state.user);

    }

    render() {
        const can_reference = this.state.reference;
        const family_data = this.state.family;
        const work_history_data = this.state.candidate_work_history_data
        const education_list = Object.keys(this.state.education_data)

        const edu_data = this.state.education_data
        var candidate_documents_data = this.state.candidate_documents_data
        // alert(candidate_documents_data)
        var candidate_doc_list = []
        console.log(candidate_documents_data, "+++++++++++++++++++++++++")
        for (var i = 0; i < candidate_documents_data.length; i++) {
            console.log(candidate_documents_data[i].document_type, "+++++++++++++++++++++++++")
            // var ff = candidate_documents_data[i].document_type
            candidate_doc_list.push(candidate_documents_data[i].document_type)
            // var index = candidate_doc_list.indexOf(ff)
            // console.log("+++++++++++++++++++++++++++++++")
            // if (index > -1) {
            //     candidate_doc_list.splice(index, 1);
            // }
        }




        const { crop, croppedImageUrl, src } = this.state;
        return (



            <div className="page-wrapper">
                <Helmet>
                    <title>Candidate Profile - Adhaan</title>
                    <meta name="description" content="Reactify Blank Page" />
                </Helmet>
                {/* Page Content */}
                <div className="content container-fluid">
                    {/* Page Header */}

                    {/* /Page Header */}
                    <div className="card mb-0">

                        {/* <div className="col-auto float-right ml-auto">
                            <button className="btn add-btn" onClick={this.previewClick} id="submit">Preview</button>

                        </div> */}

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="profile-view">

                                        {/* <div className="profile-img-wrap">
                                            <div className="profile-img">
                                                <a href="#"><img alt="" src={this.state.profilepic ? this.state.profilepic : Avatar_02} ></img></a>
                                                <div className="precent_box">
                                                    <Circle height={100}
                                                        width='100px'
                                                        animate={true} // Boolean: Animated/Static progress
                                                        responsive={true} // Boolean: Make SVG adapt to parent size
                                                        size={1} // Number: Defines the size of the circle.
                                                        lineWidth={14} // Number: Defines the thickness of the circle's stroke. 
                                                        progress={parseInt(this.state.profile_percent)} // Number: Update to change the progress and percentage.
                                                        progressColor="green"  // String: Color of "progress" portion of circle.
                                                        bgColor="whitesmoke" // String: Color of "empty" portion of circle.
                                                        textColor="#00c5fb" // String: Color of percentage text color.
                                                        textStyle={{
                                                            font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                                        }}

                                                        percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                        showPercentage={true} // Boolean: Show/hide percentage.
                                                        showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                                                    />
                                                </div>
                                            </div>
                                        </div> */}


                                        <div className="profile-basic">
                                            <div className="modal-body">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="profile-img-wrap edit-img">
                                                                <img className="inline-block" src={this.state.profilepic} alt=" " />
                                                                <div className="fileupload btn">
                                                                    <span className="btn-text">Upload</span>
                                                                    <input className="upload" type="file" accept="image/*" onChange={this.onFileChange} />
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label>Full Name<span className="text-danger">*</span></label>
                                                                        <input type="text" autoFocus required className="form-control" onChange={this.setName} defaultValue={this.state.name} />
                                                                        {this.isBlank(this.state.name) ?
                                                                            <span className="text-danger">{this.state.errormain}</span>
                                                                            :
                                                                            ''
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label>Father Name<span className="text-danger">*</span></label>
                                                                        <input type="text" className="form-control" onChange={this.setFat_Name} defaultValue={this.state.father_name} />
                                                                        {this.isBlank(this.state.father_name) ?
                                                                            <span className="text-danger">{this.state.errormain}</span>
                                                                            :
                                                                            ''
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="w-100">Birth Date<span className="text-danger">*</span>
                                                                            <DatePicker
                                                                                disabledDate={(current) => {

                                                                                    const start = Moment().subtract(18, 'years');
                                                                                    return current > start;
                                                                                }}
                                                                                className="form-control floating datetimepicker" onChange={(e) => this.setDob(e)}
                                                                                value={

                                                                                    this.state.dob ? Moment(this.state.dob, 'YYYY-MM-DD') : undefined}></DatePicker>
                                                                            {/* <DatePicker className="form-control floating datetimepicker"
                                                                            disabledDate={(current) => {

                                                                                const start = Moment().subtract(18, 'years');
                                                                                return current > start;
                                                                            }}
                                                                            onChange={(e) => this.setDob(e)}

                                                                            value={

                                                                                this.state.dob ? Moment(this.state.dob, 'YYYY-MM-DD') : Moment().subtract(18, 'years')}>{this.state.dob ? '' : "Select Date"}</DatePicker> */}
                                                                        </label>
                                                                    </div>
                                                                    {/* <label>{this.state.dob} </label> */}
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label>Gender<span className="text-danger">*</span></label>
                                                                        <select value={this.state.gender} className=" form-control" onChange={this.setgender}>
                                                                            <option value="">Select gender</option>
                                                                            <option value="male">Male</option>
                                                                            <option value="female">Female</option>
                                                                            <option value="other">Other</option>
                                                                        </select>
                                                                        {this.isBlank(this.state.gender) ?
                                                                            <span className="text-danger">{this.state.errormain}</span>
                                                                            :
                                                                            ''
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Current Address<span className="text-danger">*</span></label>
                                                                <input type="text" defaultValue={this.state.c_full_address} className="form-control" onChange={this.setcurrentFullAdd} />
                                                                {this.isBlank(this.state.c_full_address) ?
                                                                    <span className="text-danger">{this.state.errormain}</span>
                                                                    :
                                                                    ''
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label> Country <span className="text-danger">*</span></label>

                                                                <select value={this.state.c_country} className=" form-control" onChange={this.setcurrentCountry}>
                                                                    {
                                                                        this.state.callcountry.map((country) =>
                                                                            <option>{country.name}</option>
                                                                        )
                                                                    }
                                                                </select>
                                                                {this.isBlank(this.state.c_country) ?
                                                                    <span className="text-danger">{this.state.errormain}</span>
                                                                    :
                                                                    ''
                                                                }
                                                            </div>

                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>State<span className="text-danger">*</span></label>
                                                                <select value={this.state.c_state} className=" form-control" onChange={this.setcurrentState}>
                                                                    {
                                                                        this.state.stateListOfCountry.map((country) =>
                                                                            <option>{country.name}</option>
                                                                        )
                                                                    }
                                                                </select>
                                                                {this.isBlank(this.state.c_state) ?
                                                                    <span className="text-danger">{this.state.errormain}</span>
                                                                    :
                                                                    ''
                                                                }
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>City<span className="text-danger">*</span></label>
                                                                <input type="text" defaultValue={this.state.c_city} className="form-control" onChange={this.setcurrentCity} />
                                                            </div>
                                                            {this.isBlank(this.state.c_city) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>


                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Pin Code<span className="text-danger">*</span></label>
                                                                <input maxLength="6" type="text" value={this.state.c_pin_code} className="form-control" onChange={this.setcurrentPin} />
                                                            </div>
                                                            {this.isBlank(this.state.c_pin_code) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Phone Number<span className="text-danger">*</span></label>
                                                                <input type="text" maxLength="10" value={this.state.c_mobile_no} className="form-control" onChange={this.setcurrentPhone} />
                                                            </div>
                                                            {this.isBlank(this.state.c_mobile_no) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="add " style={{ float: 'left', }}>
                                                                <label style={{ fontWeight: 'bold' }}>Please tick if Permanent Address is same as Current Address</label>
                                                                &nbsp; &nbsp; <input type="checkbox" onChange={this.sameAddDAta} defaultChecked={false} className="forcheckbox" />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Permanent Address<span className="text-danger">*</span></label>
                                                                <input type="text" value={this.state.p_full_address} className="form-control" onChange={this.setPermanentFullAdd} />


                                                            </div>

                                                            {this.isBlank(this.state.p_full_address) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label> Country <span className="text-danger">*</span></label>

                                                                <select value={this.state.p_country} className=" form-control" onChange={this.setPermanentCountry}>
                                                                    {
                                                                        this.state.pallcountry.map((country) =>
                                                                            <option>{country.name}</option>
                                                                        )
                                                                    }
                                                                </select>
                                                            </div>
                                                            {this.isBlank(this.state.p_country) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                        <div className="col-md-6">

                                                            <div className="form-group">
                                                                <label> State <span className="text-danger">*</span></label>

                                                                <select value={this.state.p_state} className=" form-control" onChange={this.setPermanentState}>
                                                                    {
                                                                        this.state.pstateListOfCountry.map((state) =>
                                                                            <option>{state.name}</option>
                                                                        )
                                                                    }
                                                                </select>

                                                            </div>
                                                            {this.isBlank(this.state.p_state) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>City<span className="text-danger">*</span></label>
                                                                <input type="text" defaultValue={this.state.p_city} className="form-control" onChange={this.setPermnanetCity} />
                                                            </div>
                                                            {this.isBlank(this.state.p_city) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>



                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Pin Code<span className="text-danger">*</span></label>
                                                                <input maxLength="6" type="text" value={this.state.p_pin_code} className="form-control" onChange={this.setPermanentPin} />
                                                            </div>
                                                            {this.isBlank(this.state.p_pin_code) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>





                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Phone Number<span className="text-danger">*</span></label>
                                                                <input maxLength="10" type="text" value={this.state.p_mobile_no} className="form-control" onChange={this.setPermanentMobile} />
                                                            </div>
                                                            {this.isBlank(this.state.p_mobile_no) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Email <span className="text-danger">*</span></label>
                                                                <input type="text" defaultValue={this.state.c_email} className="form-control" onChange={this.setEmail} />
                                                            </div>
                                                            {this.isBlank(this.state.c_email) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Emergency Contact Person Name <span className="text-danger">*</span></label>
                                                                <input type="text" defaultValue={this.state.contperson} className="form-control" onChange={this.setEname} />
                                                            </div>
                                                            {this.isBlank(this.state.contperson) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Emergency Contact Number <span className="text-danger">*</span></label>
                                                                <input type="text" maxLength="10" value={this.state.emergencyNo} className="form-control" onChange={this.setENum} />
                                                            </div>
                                                            {this.isBlank(this.state.emergencyNo) ?
                                                                <span className="text-danger">{this.state.errormain}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Department </label>
                                                                <input type="text" readOnly defaultValue={this.state.department} className="form-control" onChange={this.setDepartment} />
                                                            </div>
                                                            {/* {this.isBlank(this.state.department) ?
                        <span className="text-danger">{this.state.error1}</span>
                        :
                        ''
                      } */}
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Designation </label>
                                                                <input type="text" defaultValue={this.state.designation} className="form-control" readOnly onChange={this.setDesigination} />
                                                            </div>
                                                            {/* {this.isBlank(this.state.designation) ?
                        <span className="text-danger">{this.state.error1}</span>
                        :
                        ''
                      } */}
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Refer By  </label>
                                                                <input type="text" defaultValue={this.state.recruiter_employee_id} readOnly className="form-control" onChange={this.setReferBy} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="submit-section float-right float_none">
                                                        <button className="btn btn-primary submit-btn " onClick={this.addBasicDetails}>Save</button>
                                                    </div>
                                                    <label className="text-danger">{this.state.error}</label>
                                                </form>
                                            </div>
                                            {/* <div className="pro-edit"><a data-target="#profile_info" data-toggle="modal" className="edit-icon" href="#"><i className="fa fa-pencil" /></a></div> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card tab-box">
                        <div className="row user-tabs">
                            <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                                <ul className="nav nav-tabs nav-tabs-bottom">


                                    <li className="nav-item"><a className="nav-link active">Profile</a></li>
                                    {/* <li className="nav-item"><a data-toggle="tab" onClick={this.pfClick} className="nav-link">PF</a></li> */}
                                    {/* <li className="nav-item"><a data-toggle="tab" onClick={this.esiClick} className="nav-link">ESIC</a></li> */}
                                    {/* <li className="nav-item"><a data-toggle="tab" onClick={this.gratitutyClick} className="nav-link">GRATITUTY</a></li> */}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        {/* Profile Info Tab */}
                        <div id="emp_profile" className="pro-overview tab-pane fade show active">
                            <div className="row">
                                <div className="col-md-6 d-flex">
                                    <div className="card profile-box flex-fill">
                                        <div className="card-body">
                                            <h3 className="card-title">Personal Details </h3>
                                            <ul className="personal-info">
                                                <li>
                                                    <div className="col-md-12">
                                                        <div className="form-group row">
                                                            <label className="col-sm-4 col-form-label">Category <span className="text-danger">*</span></label>
                                                            <div className='clearfix'></div>
                                                            <div className="col-sm-8 myradio">

                                                                <input type="radio" id="vehicle13" name="vehicle1" checked={this.state.category == "SC"} value="SC" onChange={this.setCategory} />
                                                                <label htmlFor="vehicle" className="ml-1 mr-4" >SC</label>


                                                                <input type="radio" id="vehicle14" name="vehicle1" checked={this.state.category == "ST"} value="ST" onChange={this.setCategory} />
                                                                <label htmlFor="vehicle1" className="ml-1 mr-4">ST</label>


                                                                <input type="radio" id="vehicle2" checked={this.state.category == "OBC"} name="vehicle1" value="OBC" onChange={this.setCategory} />
                                                                <label htmlFor="radio" className="ml-1 mr-4">OBC</label>


                                                                <input type="radio" id="vehicle3" name="vehicle1" checked={this.state.category == "OPEN"} value="OPEN" onChange={this.setCategory} />
                                                                <label htmlFor="vehicle3" className="ml-1 mr-4">OPEN</label>

                                                            </div>
                                                            {this.isBlank(this.state.category) ?
                                                                <span className="text-danger">{this.state.errorp}</span>
                                                                :
                                                                ''
                                                            }
                                                        </div>
                                                    </div>

                                                </li>
                                                <li>
                                                    <div className="col-md-12">
                                                        <div className="form-group row">
                                                            <label className="col-sm-4 col-form-label">Blood group </label>
                                                            <div className="col-sm-8">
                                                                <select className=" form-control" value={this.state.blood_group} onChange={this.setBloodGroup}>
                                                                    <option value="0">Select blood group</option>
                                                                    <option>A+</option>
                                                                    <option>A-</option>
                                                                    <option>B+</option>
                                                                    <option>B-</option>
                                                                    <option>O+</option>
                                                                    <option>O-</option>
                                                                    <option>AB+</option>
                                                                    <option>AB-</option>
                                                                </select>
                                                            </div>
                                                            {/* <input className="form-control" Style="text-transform:uppercase" defaultValue={this.state.blood_group}type="text" onChange={this.} /> */}
                                                        </div>
                                                        {/* {this.isBlank(this.state.blood_group) ?
                                                            <span className="text-danger">{this.state.errorp}</span>
                                                            :
                                                            ''
                                                        } */}
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col-md-12">
                                                        <div className="form-group row">
                                                            <label className="col-sm-4 col-form-label">Mother Tongue <span className="text-danger">*</span></label>
                                                            <div className="col-sm-8">
                                                                <input className="form-control" defaultValue={this.state.mother_tongue} type="text" onChange={this.setMothertounge} />
                                                            </div>
                                                        </div>
                                                        {this.isBlank(this.state.mother_tongue) ?
                                                            <span className="text-danger">{this.state.errorp}</span>
                                                            :
                                                            ''
                                                        }
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col-md-12">
                                                        <div className="form-group row">
                                                            <label className="col-sm-4 col-form-label">Nationality <span className="text-danger" >*</span></label>
                                                            <div className="col-sm-8">
                                                                <input defaultValue={this.state.nationality} className="form-control" type="text" onChange={this.setNationility} />
                                                            </div>
                                                        </div>
                                                        {this.isBlank(this.state.nationality) ?
                                                            <span className="text-danger">{this.state.errorp}</span>
                                                            :
                                                            ''
                                                        }
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col-md-12">
                                                        <div className="form-group row">
                                                            <label className="col-sm-4 col-form-label">Religion</label>
                                                            <div className="col-sm-8">
                                                                <input defaultValue={this.state.religion} className="form-control" type="text" onChange={this.setReligion} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="col-md-12">
                                                        <div className="form-group row">
                                                            <label className="col-sm-4 col-form-label">Marital status <span className="text-danger">*</span></label>
                                                            <div className="col-sm-8">
                                                                <select value={this.state.marital_status} className=" form-control" onChange={this.setMarriageStatus}>
                                                                    <option value="0">Select marital status</option>
                                                                    <option>Single</option>
                                                                    <option>Married</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        {this.isBlank(this.state.marital_status) ?
                                                            <span className="text-danger">{this.state.errorp}</span>
                                                            :
                                                            ''
                                                        }
                                                    </div>
                                                </li>
                                                {
                                                    this.state.isSigle ? <li>
                                                        <div className="col-md-12">
                                                            <div className="form-group row">
                                                                <label className="col-sm-4 col-form-label">Marriage Date</label>
                                                                <div className="col-sm-8">
                                                                    <DatePicker
                                                                        disabledDate={(current) => {

                                                                            const start = Moment();
                                                                            return current > start;
                                                                        }}
                                                                        className="form-control floating datetimepicker" onChange={(e) => this.setMarriageDate(e)}
                                                                        value={

                                                                            this.state.marrage_date ? Moment(this.state.marrage_date, 'YYYY-MM-DD') : undefined}></DatePicker>
                                                                    {/* <DatePicker
                                                                       
                                                                        value={

                                                                            this.state.marrage_date ? Moment(this.state.marrage_date, 'YYYY-MM-DD') : Moment()} className="form-control floating datetimepicker" onChange={(e) => this.setMarriageDate(e)}></DatePicker> */}
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </li> : ''
                                                }


                                                <div className="submit-section float-right float_none">
                                                    <button className="btn btn-primary submit-btn" onClick={this.addPersonalInfoData}>Save</button>
                                                </div>




                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <div className="card profile-box flex-fill">
                                        <div className="card-body">
                                            <h3 className="card-title">Reference Details</h3>
                                            <span style={{ position: 'absolute', top: '10px', right: '30px' }}><button className="edit-icon ml-2 w-auto p-1" data-toggle="modal" onClick={(event) => this.addrow(event, "1")}>Add more <i className="fa fa-plus" /></button></span>
                                            {can_reference.map(reference => (
                                                <ul className="personal-info" key={reference.key}>
                                                    <li>
                                                        <div className="title">Name</div>
                                                        <div className="text">{reference.name}</div>
                                                    </li>

                                                    <li>
                                                        <div className="title">Phone </div>
                                                        <div className="text">{reference.mobile_no}</div>
                                                    </li>
                                                    <li>
                                                        <div className="title">Location </div>
                                                        <div className="text">{reference.location}</div>
                                                    </li>
                                                    <br />
                                                    <hr />
                                                </ul>


                                            ))}
                                            {this.state.addrefvar ? <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Name <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" value={this.state.ref_name} onChange={this.setReferencename} />
                                                    </div>

                                                    {this.isBlank(this.state.ref_name) ?
                                                        <span className="text-danger">{this.state.referror}</span>
                                                        :
                                                        ''
                                                    }



                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Relationship <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" value={this.state.ref_relation} onChange={this.setReferencerleation} />

                                                    </div>

                                                    {this.isBlank(this.state.ref_relation) ?
                                                        <span className="text-danger">{this.state.referror}</span>
                                                        :
                                                        ''
                                                    }

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Phone <span className="text-danger">*</span></label>
                                                        <input className="form-control" value={this.state.ref_no} type="text" maxLength="10" value={this.state.ref_no} onChange={this.setReferenceNumber} />
                                                    </div>


                                                    {this.isBlank(this.state.ref_no) ?
                                                        <span className="text-danger">{this.state.referror}</span>
                                                        :
                                                        ''
                                                    }

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Location</label>
                                                        <input className="form-control" value={this.state.ref_loc} type="text" onChange={this.setReferenceLocation} />
                                                    </div>
                                                </div>

                                            </div> : ''}


                                            {this.state.addrefvar ? <div className="submit-section float-right float_none">
                                                <button className="btn btn-primary submit-btn" onClick={this.addRef}>Save</button>
                                            </div> : ''}



                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 d-flex">
                                    <div className="card profile-box flex-fill">
                                        <div className="card-body">
                                            <h3 className="card-title">Bank Details</h3>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Bank Name <span className="text-danger">*</span></label>

                                                        <select className="mb-3 form-control" value={this.state.bank_name} onChange={this.setBankName} >
                                                            {/* <option value='0'>Select Education Level </option> */}
                                                            <option value='0'>Select Bank</option>
                                                            {

                                                                banklist.map(family => (<option >{family}</option>))
                                                            }

                                                        </select>

                                                    </div>

                                                    {this.isBlank(this.state.bank_name) ?
                                                        <span className="text-danger">{this.state.bankerror}</span>
                                                        :
                                                        ''
                                                    }


                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Account number <span className="text-danger">*</span></label>
                                                        <input value={this.state.account_number} className="form-control" type="text" onChange={this.setAccountNo} />
                                                    </div>




                                                    {this.isBlank(this.state.account_number) ?
                                                        <span className="text-danger">{this.state.bankerror}</span>
                                                        :
                                                        ''
                                                    }
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Ifsc code <span className="text-danger">*</span></label>
                                                        <input className="form-control" type="text" value={this.state.ifsc_code} onChange={this.setIfsc_Code} />
                                                    </div>



                                                    {this.isBlank(this.state.ifsc_code) ?
                                                        <span className="text-danger">{this.state.bankerror}</span>
                                                        :
                                                        ''
                                                    }
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Branch Name</label>
                                                        <input className="form-control" type="text" value={this.state.branch_name} onChange={this.setBranchName} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <h3 className="card-title">Bank Details
                       {this.state.bank_name ? <a></a> : <a href="#" className="edit-icon" data-toggle="modal" data-target="#bank_contact_modal">
                                                    <i className="fa fa-pencil" /></a>}</h3>
                                            <ul className="personal-info">
                                                <li>
                                                    <div className="title">Bank name</div>
                                                    <div className="text">{this.state.bank_name}</div>
                                                </li>
                                                <li>
                                                    <div className="title">Bank account No.</div>
                                                    <div className="text">{this.state.account_number}</div>
                                                </li>
                                                <li>
                                                    <div className="title">IFSC Code</div>
                                                    <div className="text">{this.state.ifsc_code}</div>
                                                </li>
                                                <li>
                                                    <div className="title">Branch</div>
                                                    <div className="text">{this.state.branch_name}</div>
                                                </li>
                                            </ul> */}
                                            {/* <div className="submit-section float-right">
                                                    <button onClick={this.addBankDetails} className="btn btn-primary submit-btn">Save</button>
                                                </div> */}
                                            {
                                                this.state.bankflag ? '' : <div className="submit-section float-right float_none">
                                                    <button onClick={this.addBankDetails} className="btn btn-primary submit-btn">Save</button>
                                                </div>
                                            }

                                            {/* <label className="text-danger">{this.state.error}</label> */}
                                        </div>


                                    </div>

                                </div>
                                <div className="col-md-6 d-flex">
                                    <div className="card profile-box flex-fill">
                                        <div className="card-body">
                                            <h3 className="card-title">Family Details</h3>
                                            <span style={{ position: 'absolute', top: '10px', right: '30px' }}><button className="edit-icon ml-2 w-auto p-1" data-toggle="modal" onClick={(e) => this.addrow(e, "2")}>Add more <i className="fa fa-plus" /></button></span>
                                            {family_data.map(family => (
                                                //   <tr key={family.key}>
                                                //     <td>{family.name}</td>
                                                //     <td>{family.relation}</td>
                                                //     <td>{family.dob}</td>
                                                //     <td>{family.aadhaar_no}</td>
                                                //     <td className="text-right">
                                                //       <div className="dropdown dropdown-action">
                                                //         <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                                //         <div className="dropdown-menu dropdown-menu-right">
                                                //           {/* <a href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                //           <a href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a> */}
                                                //         </div>
                                                //       </div>
                                                //     </td>
                                                //   </tr>
                                                <div className="row">


                                                    <div className="col-md-6">

                                                        <div className="form-group">
                                                            <label>Name </label>
                                                            <input value={family.name} readOnly className="form-control" type="text" />
                                                        </div>




                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Relationship </label>
                                                            <select className="mb-3 form-control" readOnly value={family.relation}  >

                                                                <option value="0">{family.relation}</option>

                                                            </select>

                                                        </div>





                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Date of birth :  <input readOnly className="form-control" type="text" maxLength="12" value={family.dob} /></label>
                                                        </div>



                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Aadhar Number </label>
                                                            <input className="form-control" readOnly type="text" maxLength="12" value={family.aadhaar_no} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="checkbox" readOnly id="vehicle10" name="vehicle1" checked={family.is_nominee} />
                                                            <label className="ml-2">Is Nominee</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))}
                                            {this.state.addfamilyvar ? <div className="row">


                                                <div className="col-md-6">

                                                    <div className="form-group">
                                                        <label>Name <span className="text-danger">*</span></label>
                                                        <input value={this.state.family_name} className="form-control" type="text" onChange={this.setFamilyName} />
                                                    </div>

                                                    {this.isBlank(this.state.family_name) ?
                                                        <span className="text-danger">{this.state.error1}</span>
                                                        :
                                                        ''
                                                    }


                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Relationship <span className="text-danger">*</span></label>
                                                        <select className="mb-3 form-control" value={this.state.family_relation} onChange={this.setFamilyRelation} >
                                                            {/* <option value='0'>Select Education Level </option> */}
                                                            <option value="0">Select Relationship</option>
                                                            <option value="mother">Mother</option>
                                                            <option value="father">Father</option>
                                                            <option value="spouse">Spouse</option>
                                                            <option value="son"> Son</option>
                                                            <option value="daughter">Daughter</option>
                                                        </select>
                                                        {/* <input className="form-control" type="text" value={this.state.family_relation} onChange={this.setFamilyRelation} /> */}
                                                    </div>


                                                    {this.isBlank(this.state.family_relation) ?
                                                        <span className="text-danger">{this.state.error1}</span>
                                                        :
                                                        ''
                                                    }


                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Date of birth <span className="text-danger">*</span>
                                                            <DatePicker
                                                                disabledDate={(current) => {

                                                                    const start = Moment();
                                                                    return current > start;
                                                                }} className="form-control floating datetimepicker" onChange={(e) => this.setFamilyDob(e)}></DatePicker> </label>
                                                    </div>

                                                    {/* {this.isBlank(this.state.family_dob =='Invalid date'? Moment(this.state.family_dob, 'YYYY-MM-DD') : Moment())?
                          <span className="text-danger">{this.state.error1}</span>
                          :
                          ''
                        } */}



                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Aadhar Number </label>
                                                        <input className="form-control" type="text" maxLength="12" value={this.state.family_adhar} onChange={this.setFamilyAdhar} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="checkbox" id="vehicle10" name="vehicle1" value="1" onChange={this.setIsNominee} />
                                                        <label className="ml-2">Is Nominee</label>
                                                    </div>
                                                </div>

                                            </div> : ''}


                                            {this.state.addfamilyvar ? <div className="submit-section float-right float_none">
                                                <button className="btn btn-primary submit-btn" onClick={this.addFamilyData}>Save</button>
                                            </div> : ''}

                                            {/* <label className="text-danger">{this.state.error}</label> */}


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 d-flex">
                                    <div className="card profile-box flex-fill">
                                        <div className="card-body">
                                            <h3 className="card-title">Education Details</h3>
                                            <span style={{ position: 'absolute', top: '10px', right: '30px' }}><button className="edit-icon ml-2 w-auto p-1" data-toggle="modal" onClick={(e) => this.addrow(e, "3")}>Add more <i className="fa fa-plus" /></button></span>
                                            <div className="experience-box">
                                                <ul className="experience-list">
                                                    {education_list.map(education => (
                                                        <li key={education.key}>
                                                            <div className="experience-user">
                                                                <div className="before-circle" />
                                                            </div>
                                                            <div className="experience-content">
                                                                <div className="timeline-content">
                                                                    <a href="" className="name">{education.includes("_") ? "Postgraduate" : education.slice(0, 1).toUpperCase() + education.slice(1, education.length)}  {edu_data['' + education].board_university ? "from " + edu_data['' + education].board_university : ""}</a>
                                                                    <div>{edu_data['' + education].school}</div>
                                                                    <span className="time">{edu_data['' + education].passing_year}</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>
                                            <br></br>
                                            <br></br>
                                            {this.state.eduvar ? <div className="row">
                                                <div className="col-md-6">
                                                    {/* <label>Education-Level</label> */}

                                                    <select className="mb-3 form-control" onChange={this.educationChane} >
                                                        {/* <option value='0'>Select Education Level </option> */}

                                                        <option value="10">10</option>
                                                        <option value="12">12</option>
                                                        <option value="graduate">Graduate</option>
                                                        <option value="post_graduate">Post Graduate</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group form-focus focused div1">
                                                        <input type="text" className="form-control floating" onChange={this.setSchool} value={this.state.school} />
                                                        <label className="focus-label">School/University</label>
                                                    </div>



                                                    {/* {this.isBlank(this.state.school) ?
                                                        <span className="text-danger">{this.state.eductionerro}</span>
                                                        :

                                                        ''
                                                    } */}
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group form-focus focused">
                                                        <input type="text" className="form-control floating" onChange={this.setLocationEducation} value={this.state.location} />
                                                        <label className="focus-label">Location</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group form-focus focused">
                                                        <div className="">
                                                            <input type="text" className="form-control floating datetimepicker" onChange={this.setPassingYear} value={this.state.passing_year} />
                                                        </div>
                                                        <label className="focus-label">Year of passing<span className="text-danger">*</span></label>
                                                    </div>



                                                    {this.isBlank(this.state.passing_year) ?
                                                        <span className="text-danger">{this.state.eductionerro}</span>
                                                        :
                                                        ''
                                                    }
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group form-focus focused">
                                                        <input type="text" className="form-control floating" onChange={this.setBoard} value={this.state.board} />
                                                        <label className="focus-label">Board/University</label>
                                                    </div>


                                                    {/* {this.isBlank(this.state.board) ?
                                                        <span className="text-danger">{this.state.eductionerro}</span>
                                                        :
                                                        ''
                                                    } */}


                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group form-focus focused">
                                                        <input type="text" className="form-control floating" onChange={this.setDegree} value={this.state.degree} />
                                                        <label className="focus-label">Degree</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group form-focus focused">
                                                        <input type="text" className="form-control floating" value={this.state.percentage} onChange={this.setPercentage} />
                                                        <label className="focus-label">% Marks/Cgpa</label>
                                                    </div>



                                                    {/* {this.isBlank(this.state.percentage) ?
                                                        <span className="text-danger">{this.state.eductionerro}</span>
                                                        :
                                                        ''
                                                    } */}
                                                </div>

                                            </div> : ''}


                                            {/* <label className="text-danger">{this.state.error}</label> */}

                                            {this.state.eduvar ? <div className="submit-section float-right float_none">
                                                <button className="btn btn-primary submit-btn" onClick={this.addEducationData}>Save</button>
                                            </div> : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <div className="card profile-box flex-fill">
                                        <div className="card-body">
                                            <h3 className="card-title">Work Experience</h3>
                                            <span style={{ position: 'absolute', top: '10px', right: '30px' }}><button className="edit-icon ml-2 w-auto p-1" data-toggle="modal" onClick={(e) => this.addrow(e, "4")}>Add more <i className="fa fa-plus" /></button></span>
                                            <div className="experience-box">

                                                <ul className="experience-list">
                                                    {work_history_data.map(work => (
                                                        <li key={work.key}>
                                                            <div className="experience-user">
                                                                <div className="before-circle" />
                                                            </div>
                                                            <div className="experience-content">
                                                                <div className="timeline-content">
                                                                    <a href="" className="name">{work.designation}  at {work.organization}</a>
                                                                    <span className="time">{work.start_date}-{work.end_date}</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}



                                                </ul>

                                            </div>
                                            {this.state.expvar ? <div className="row">
                                                <div className="col-md-6">
                                                    <label className="focus-label">Organisation<span className="text-danger">*</span></label>
                                                    <div className="form-group form-focus">
                                                        <input type="text" placeholder="Organisation" className="form-control floating" onChange={this.setExperienceOrgination} value={this.state.experienceOrgination} />

                                                    </div>
                                                    {this.isBlank(this.state.experienceOrgination) ?
                                                        <span className="text-danger">{this.state.experror}</span>
                                                        :
                                                        ''
                                                    }

                                                </div>
                                                <div className="col-md-6">
                                                    <label className="focus-label">Reason for Separation</label>
                                                    <div className="form-group form-focus">
                                                        <input placeholder="Reason for Separation" type="text" className="form-control floating" onChange={this.setReason} value={this.state.reasonforSep} />

                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <label className="focus-label">Designation</label>
                                                    <div className="form-group form-focus">
                                                        <input type="text" placeholder="Designation" className="form-control floating" onChange={this.setExprienceDesignation} value={this.state.exprienceDesignation} />

                                                    </div>

                                                    {/* {this.isBlank(this.state.exprienceDesignation) ?
                                                        <span className="text-danger">{this.state.experror}</span>
                                                        :
                                                        ''
                                                    } */}

                                                </div>
                                                <div className="col-md-6">
                                                    <label className="focus-label">Period From<span className="text-danger">*</span></label>
                                                    <div className="form-group form-focus">
                                                        <div className="">

                                                            <DatePicker
                                                                disabledDate={(current) => {

                                                                    const start = Moment();
                                                                    return current > start;
                                                                }} className="form-control floating datetimepicker" onChange={(e) => this.setStartDate(e)}></DatePicker>
                                                        </div>

                                                    </div>


                                                    {this.isBlank(this.state.startDate_emp ? Moment(this.state.startDate_emp, 'YYYY-MM-DD') : Moment()) ?
                                                        <span className="text-danger">{this.state.experror}</span>
                                                        :
                                                        ''
                                                    }


                                                </div>
                                                <div className="col-md-6">
                                                    <label className="focus-label">Period To<span className="text-danger">*</span></label>
                                                    <div className="form-group form-focus">
                                                        <div className="">
                                                            <DatePicker
                                                                disabledDate={(current) => {

                                                                    const start = Moment();
                                                                    return current > start;
                                                                }} className="form-control floating datetimepicker" onChange={(e) => this.setEndDate(e)} maxDate={this.maxDate}
                                                            >    </DatePicker>
                                                            {/* <input type="text" className="form-control floating datetimepicker" onChange={this.} /> */}
                                                        </div>

                                                    </div>

                                                </div>


                                            </div> : ''}
                                            {this.state.expvar ? <div className="submit-section float-right float_none">
                                                <button className="btn btn-primary submit-btn" onClick={this.addExperienceData}>Save</button>
                                            </div> : ''}


                                            {/* <label className="text-danger">{this.state.error}</label> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 d-flex">
                                    <div className="card profile-box flex-fill">
                                        <div className="card-body">
                                            <h3 className="card-title">Other Details</h3>
                                            <div className="row">
                                                <div className="col-md-6">

                                                    <div className="form-group">
                                                        <label>Name </label>

                                                        <input defaultValue={this.state.candidate_other_data.name} className="form-control" type="text" onChange={this.setNameAsDl} />

                                                    </div>



                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Driving License No.{this.state.jobtype != "backoffice" ?

                                                            <span className="text-danger">*</span> : ''
                                                        }</label>
                                                        <input defaultValue={this.state.candidate_other_data.dl_no} className="form-control" type="text" onChange={this.setNameAsDlNo} />

                                                    </div>

                                                    {(this.isBlank(this.state.candidate_other_data.dl_no) && (this.state.jobtype != "backoffice")) ?
                                                        <span className="text-danger">{this.state.othererror}</span>
                                                        :
                                                        ''
                                                    }



                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Place of Issue {this.state.jobtype != "backoffice" ?

                                                            <span className="text-danger">*</span> : ''
                                                        }</label>
                                                        <input defaultValue={this.state.candidate_other_data.place_of_issue} className="form-control" type="text" onChange={this.setplaceOfIssue} />



                                                    </div>
                                                    {(this.isBlank(this.state.candidate_other_data.place_of_issue) && (this.state.jobtype != "backoffice")) ?
                                                        <span className="text-danger">{this.state.othererror}</span>
                                                        :
                                                        ''
                                                    }


                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Valid Upto (YYYY-MM-DD){this.state.jobtype != "backoffice" ?

                                                            <span className="text-danger">*</span> : ''
                                                        }</label>

                                                        <input defaultValue={this.state.candidate_other_data.valid_up_to} className="form-control" type="date" onChange={this.setValidUpto} />



                                                    </div>
                                                    {(this.isBlank(this.state.candidate_other_data.valid_up_to) && (this.state.jobtype != "backoffice")) ?
                                                        <span className="text-danger">{this.state.othererror}</span>
                                                        :
                                                        ''
                                                    }



                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Vehicle Number</label>

                                                        <input defaultValue={this.state.candidate_other_data.vehicle_no} className="form-control" type="text" onChange={this.setVehicleNo} />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>PAN Card Number</label>
                                                        <input defaultValue={this.state.candidate_other_data.pan_card_no} className="form-control" type="text" onChange={this.setPanNo} />
                                                    </div>




                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Election ID Number </label>
                                                        <input defaultValue={this.state.candidate_other_data.eid_no} className="form-control" type="text" onChange={this.setEidNo} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Aadhar card<span className="text-danger">*</span></label>

                                                        <input className="form-control" type="text" readOnly defaultValue={this.state.candidate_other_data.aadhaar_no} />
                                                    </div>





                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Old PF No.</label>

                                                        <input defaultValue={this.state.candidate_other_data.uan} className="form-control" type="text" onChange={this.setPf} />
                                                    </div>



                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Old UAN No.</label>
                                                        <input defaultValue={this.state.candidate_other_data.uan} className="form-control" type="text" onChange={this.setUan} />
                                                    </div>


                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Old ESIC No.</label>
                                                        <input defaultValue={this.state.candidate_other_data.esic_no} className="form-control" type="text" onChange={this.setEsicNo} />
                                                    </div>



                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Old ESIC Dispensary Name.</label>
                                                        <input defaultValue={this.state.candidate_other_data.esic_name} className="form-control" type="text" onChange={this.setEsicName} />
                                                    </div>




                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Old ESIC Dispensary Address</label>
                                                        <input defaultValue={this.state.candidate_other_data.esic_address} className="form-control" type="text" onChange={this.setEsicAdd} />
                                                    </div>




                                                </div>



                                            </div>

                                            <div className="submit-section float-right float_none">
                                                <button className="btn btn-primary submit-btn" onClick={this.addOtherDetails}>Save</button>
                                            </div>
                                            {/* <label className="text-danger">{this.state.error}</label> */}



                                        </div>
                                    </div>
                                </div>
                                {
                                    this.state.jobtype == "backoffice" ?

                                        <div className="col-md-6 d-flex">
                                            <div className="card profile-box flex-fill">
                                                <div className="card-body">
                                                    <h3 className="card-title">Document Checklist</h3>

                                                    <ul className="personal-info">
                                                        <li><div className="title">Adhaar Card Front<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Adhaar Card Front")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal"  ><i class="fa fa-upload" onClick={() => this.setDocName("Adhaar Card Front")}></i></a>
                                                        </li>
                                                        <li><div className="title">Adhaar Card Back<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Adhaar Card Back")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Adhaar Card Back")}></i></a>
                                                        </li>
                                                        <li><div className="title">Resume/ Bio-DATA<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Resume/ Bio-DATA")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Resume/ Bio-DATA")} ></i></a>
                                                        </li>
                                                        <li><div className="title">Passport Size Photo<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Passport Size Photo")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Passport Size Photo")}></i></a>
                                                        </li>
                                                        <li><div className="title">Bank Passbook/Cancelled Cheque<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Bank Passbook/Cancelled Cheque")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Bank Passbook/Cancelled Cheque")}></i></a>
                                                        </li>
                                                        <li><div className="title">Signature/Thumb Impression<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Signature/Thumb Impression")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Signature/Thumb Impression")}></i></a>
                                                        </li>
                                                        <li>
                                                            <div className="title">Pan Card</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Pan Card")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Pan Card")}></i></a></li>
                                                        <li><div className="title">Marriage Certificate</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Marriage Certificate")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Marriage Certificate")}></i></a></li>
                                                        <br></br>
                                                        <p style={{ fontWeight: 'bold' }}>Please upload Any One/Mandatory fields marked below:</p>
                                                        <li><div className="title">Driving License Front</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Driving License Front")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" onClick={() => this.setDocName("Driving License Front")} ><i class="fa fa-upload"></i></a>
                                                        </li>
                                                        <li><div className="title">Driving License Back</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Driving License Back")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Driving License Back")}></i></a>
                                                        </li>
                                                        <li><div className="title">Voter Id Card Front</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Voter Id Front")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Voter Id Front")}></i></a></li>

                                                        <li><div className="title">Voter Id Card Back</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Voter Id Back")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Voter Id Back")}></i></a></li>

                                                        <li><div className="title">Ration Card</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Ration Card")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Ration Card")}></i></a></li>
                                                        <li><div className="title">Rent Agreement/ Electricity Bill</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Rent Agreement")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Rent Agreement")}></i></a></li>

                                                        {/* <li><div className="title">Thumb Impression</div>
                                                    <input type="checkbox"></input>
                                                    <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload"></i></a></li> */}
                                                    </ul>


                                                </div>
                                            </div>
                                        </div> : <div className="col-md-6 d-flex">
                                            <div className="card profile-box flex-fill">
                                                <div className="card-body">
                                                    <h3 className="card-title">Document Checklist</h3>
                                                    {/* <ul className="personal-info">
                                                {candidate_documents_data.map(document => (
                                                    <li key={document.key} >
                                                        <div className="title">{document.document_type}</div>
                                                        <input type="checkbox" className="" defaultChecked="true" />
                                                        <a href="#" className="edit-icon" data-toggle="modal"  id={document.document_type}><i className="fa fa-upload" onClick={() => this.setDocName(document.document_type)} /></a>

                                                    </li>
                                                ))}

                                                {candidate_doc_list.map(document => (
                                                    <li key={document.key} >
                                                        <div className="title">{document}</div>
                                                        <input type="checkbox" className="" />
                                                        <a href="#" className="edit-icon" data-toggle="modal" ><i className="fa fa-upload" onClick={() => this.setDocName(document)} /></a>


                                                    </li>
                                                ))}

                                            </ul> */}
                                                    <ul className="personal-info">
                                                        <li><div className="title">Adhaar Card Front<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Adhaar Card Front")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal"><i class="fa fa-upload" onClick={() => this.setDocName("Adhaar Card Front")}></i></a>
                                                        </li>
                                                        <li><div className="title">Adhaar Card Back<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Adhaar Card Back")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Adhaar Card Back")}></i></a>
                                                        </li>
                                                        <li><div className="title">Resume/ Bio-DATA<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Resume/ Bio-DATA")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Resume/ Bio-DATA")} ></i></a>
                                                        </li>
                                                        <li><div className="title">Passport Size Photo<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Passport Size Photo")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Passport Size Photo")}></i></a>
                                                        </li>
                                                        <li><div className="title">Bank Passbook/Cancelled Cheque<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Bank Passbook/Cancelled Cheque")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Bank Passbook/Cancelled Cheque")}></i></a>
                                                        </li>
                                                        <li><div className="title">Signature/Thumb Impression<span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Signature/Thumb Impression")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Signature/Thumb Impression")}></i></a>
                                                        </li>
                                                        <li>
                                                            <div className="title">Pan Card</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Pan Card")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Pan Card")}></i></a></li>
                                                        <li><div className="title">Marriage Certificate</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Marriage Certificate")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Marriage Certificate")}></i></a></li>
                                                        <br></br>
                                                        <p style={{ fontWeight: 'bold' }}>Please upload Any One/Mandatory fields marked below:</p>
                                                        <li><div className="title">Driving License Front <span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Driving License Front")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Driving License Front")}></i></a>
                                                        </li>
                                                        <li><div className="title">Driving License Back <span class="text-danger">*</span></div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Driving License Back")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Driving License Back")}></i></a>
                                                        </li>
                                                        <li><div className="title">Voter Id Card Front</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Voter Id Front")} ></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Voter Id Front")}></i></a></li>

                                                        <li><div className="title">Voter Id Card Back</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Voter Id Back")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Voter Id Back")}></i></a></li>

                                                        <li><div className="title">Ration Card</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Ration Card")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Ration Card")}></i></a></li>
                                                        <li><div className="title">Rent Agreement/Electricity Bill</div>
                                                            <input type="checkbox" checked={candidate_doc_list.includes("Rent Agreement")}></input>
                                                            <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload" onClick={() => this.setDocName("Rent Agreement")}></i></a></li>

                                                        {/* <li><div className="title">Thumb Impression</div>
                                                    <input type="checkbox"></input>
                                                    <a href="#" class="edit-icon" data-toggle="modal" ><i class="fa fa-upload"></i></a></li> */}
                                                    </ul>


                                                </div>
                                            </div>
                                        </div>
                                }



                            </div>
                            {/* } */}
                        </div>
                        {/* /Profile Info Tab */}
                        {/* Projects Tab */}
                        <div className="tab-pane fade" id="emp_projects">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown profile-action">
                                                <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                    <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                            <h4 className="project-title"><a href="/blue/app/projects/projects-view">Office Management</a></h4>
                                            <small className="block text-ellipsis m-b-15">
                                                <span className="text-xs">1</span> <span className="text-muted">open tasks, </span>
                                                <span className="text-xs">9</span> <span className="text-muted">tasks completed</span>
                                            </small>
                                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. When an unknown printer took a galley of type and
                                            scrambled it...
                           </p>
                                            <div className="pro-deadline m-b-15">
                                                <div className="sub-title">
                                                    Deadline:
                             </div>
                                                <div className="text-muted">
                                                    17 Apr 2019
                             </div>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Project Leader :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Team :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users">+15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                            <div className="progress progress-xs mb-0">
                                                <div style={{ width: '40%' }} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown profile-action">
                                                <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                    <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                            <h4 className="project-title"><a href="/blue/app/projects/projects-view">Project Management</a></h4>
                                            <small className="block text-ellipsis m-b-15">
                                                <span className="text-xs">2</span> <span className="text-muted">open tasks, </span>
                                                <span className="text-xs">5</span> <span className="text-muted">tasks completed</span>
                                            </small>
                                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. When an unknown printer took a galley of type and
                                            scrambled it...
                           </p>
                                            <div className="pro-deadline m-b-15">
                                                <div className="sub-title">
                                                    Deadline:
                             </div>
                                                <div className="text-muted">
                                                    17 Apr 2019
                             </div>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Project Leader :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Team :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users">+15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                            <div className="progress progress-xs mb-0">
                                                <div style={{ width: '40%' }} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown profile-action">
                                                <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                    <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                            <h4 className="project-title"><a href="/blue/app/projects/projects-view">Video Calling App</a></h4>
                                            <small className="block text-ellipsis m-b-15">
                                                <span className="text-xs">3</span> <span className="text-muted">open tasks, </span>
                                                <span className="text-xs">3</span> <span className="text-muted">tasks completed</span>
                                            </small>
                                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. When an unknown printer took a galley of type and
                                            scrambled it...
                           </p>
                                            <div className="pro-deadline m-b-15">
                                                <div className="sub-title">
                                                    Deadline:
                             </div>
                                                <div className="text-muted">
                                                    17 Apr 2019
                             </div>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Project Leader :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Team :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users">+15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                            <div className="progress progress-xs mb-0">
                                                <div style={{ width: '40%' }} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown profile-action">
                                                <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                                    <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                                </div>
                                            </div>
                                            <h4 className="project-title"><a href="/blue/app/projects/projects-view">Hospital Administration</a></h4>
                                            <small className="block text-ellipsis m-b-15">
                                                <span className="text-xs">12</span> <span className="text-muted">open tasks, </span>
                                                <span className="text-xs">4</span> <span className="text-muted">tasks completed</span>
                                            </small>
                                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. When an unknown printer took a galley of type and
                                            scrambled it...
                           </p>
                                            <div className="pro-deadline m-b-15">
                                                <div className="sub-title">
                                                    Deadline:
                             </div>
                                                <div className="text-muted">
                                                    17 Apr 2019
                             </div>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Project Leader :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="project-members m-b-15">
                                                <div>Team :</div>
                                                <ul className="team-members">
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="all-users">+15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                                            <div className="progress progress-xs mb-0">
                                                <div style={{ width: '40%' }} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Projects Tab */}
                        {/* Bank Statutory Tab */}
                        <div className="tab-pane fade" id="bank_statutory">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title"> Basic Salary Details</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Salary basis <span className="text-danger">*</span></label>
                                                    <select className="select">
                                                        <option>Select salary basis type</option>
                                                        <option>Hourly</option>
                                                        <option>Daily</option>
                                                        <option>Weekly</option>
                                                        <option>Monthly</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Salary amount <small className="text-muted">per month</small></label>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">$</span>
                                                        </div>
                                                        <input type="text" className="form-control" placeholder="Type your salary amount" defaultValue={0.00} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Payment type</label>
                                                    <select className="select">
                                                        <option>Select payment type</option>
                                                        <option>Bank transfer</option>
                                                        <option>Check</option>
                                                        <option>Cash</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <h3 className="card-title"> PF Information</h3>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">PF contribution</label>
                                                    <select className="select">
                                                        <option>Select PF contribution</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">PF No. <span className="text-danger">*</span></label>
                                                    <select className="select">
                                                        <option>Select PF contribution</option>
                                                        <option>Yes</option>
                                                        <option>no</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Employee PF rate</label>
                                                    <select className="select">
                                                        <option>Select PF contribution</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                                                    <select className="select">
                                                        <option>Select additional rate</option>
                                                        <option>0%</option>
                                                        <option>1%</option>
                                                        <option>2%</option>
                                                        <option>3%</option>
                                                        <option>4%</option>
                                                        <option>5%</option>
                                                        <option>6%</option>
                                                        <option>7%</option>
                                                        <option>8%</option>
                                                        <option>9%</option>
                                                        <option>10%</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Total rate</label>
                                                    <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Employee PF rate</label>
                                                    <select className="select">
                                                        <option>Select PF contribution</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                                                    <select className="select">
                                                        <option>Select additional rate</option>
                                                        <option>0%</option>
                                                        <option>1%</option>
                                                        <option>2%</option>
                                                        <option>3%</option>
                                                        <option>4%</option>
                                                        <option>5%</option>
                                                        <option>6%</option>
                                                        <option>7%</option>
                                                        <option>8%</option>
                                                        <option>9%</option>
                                                        <option>10%</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Total rate</label>
                                                    <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <h3 className="card-title"> ESI Information</h3>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">ESI contribution</label>
                                                    <select className="select">
                                                        <option>Select ESI contribution</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">ESI No. <span className="text-danger">*</span></label>
                                                    <select className="select">
                                                        <option>Select ESI contribution</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Employee ESI rate</label>
                                                    <select className="select">
                                                        <option>Select ESI contribution</option>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                                                    <select className="select">
                                                        <option>Select additional rate</option>
                                                        <option>0%</option>
                                                        <option>1%</option>
                                                        <option>2%</option>
                                                        <option>3%</option>
                                                        <option>4%</option>
                                                        <option>5%</option>
                                                        <option>6%</option>
                                                        <option>7%</option>
                                                        <option>8%</option>
                                                        <option>9%</option>
                                                        <option>10%</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label className="col-form-label">Total rate</label>
                                                    <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit-section float-right float_none">
                                            <button className="btn btn-primary submit-btn" type="submit">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* /Bank Statutory Tab */}
                    </div>


                    <div className="submit-section">
                        <button className="btn btn-primary submit-btn" onClick={this.previewClick}>Preview & Submit</button>
                    </div>

                </div>
                {/* /Page Content */}
                {/* Profile Modal */}

                <div id="personal_info_modal" className="modal custom-modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Personal Details dsfsdfsd</h5>
                                <button type="button" className="close" onClick={this.closePersonalDetails}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">

                                        <div className="col-md-6">

                                            <div className="form-group">
                                                <label>Category <span className="text-danger">*</span></label>
                                                <div className='clearfix'></div>
                                                <div className="row myradio">
                                                    <div className="col">
                                                        <input type="radio" id="vehicle13" name="vehicle1" checked={this.state.category == "SC"} value="SC" onChange={this.setCategory} />
                                                        <label htmlFor="vehicle" className="ml-1" >SC</label>
                                                    </div>
                                                    <div className="col">
                                                        <input type="radio" id="vehicle14" name="vehicle1" checked={this.state.category == "ST"} value="ST" onChange={this.setCategory} />
                                                        <label htmlFor="vehicle1" className="ml-1">ST</label>
                                                    </div>
                                                    <div className="col">
                                                        <input type="radio" id="vehicle2" checked={this.state.category == "OBC"} name="vehicle1" value="OBC" onChange={this.setCategory} />
                                                        <label htmlFor="radio" className="ml-1">OBC</label>
                                                    </div>
                                                    <div className="col">
                                                        <input type="radio" id="vehicle3" name="vehicle1" checked={this.state.category == "OPEN"} value="OPEN" onChange={this.setCategory} />
                                                        <label htmlFor="vehicle3" className="ml-1">OPEN</label>
                                                    </div>
                                                </div>
                                                {this.isBlank(this.state.category) ?
                                                    <span className="text-danger">{this.state.error1}</span>
                                                    :
                                                    ''
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Nationality <span className="text-danger" >*</span></label>
                                                <input defaultValue={this.state.nationality} className="form-control" type="text" onChange={this.setNationility} />
                                            </div>
                                            {this.isBlank(this.state.nationality) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Blood group </label>

                                                <select className=" form-control" value={this.state.blood_group} onChange={this.setBloodGroup}>
                                                    <option value="0">Select blood group</option>
                                                    <option>A+</option>
                                                    <option>A-</option>
                                                    <option>B+</option>
                                                    <option>B-</option>
                                                    <option>O+</option>
                                                    <option>O-</option>
                                                    <option>AB+</option>
                                                    <option>AB-</option>
                                                </select>
                                                {/* <input className="form-control" Style="text-transform:uppercase" defaultValue={this.state.blood_group}type="text" onChange={this.} /> */}

                                            </div>
                                            {/* {this.isBlank(this.state.blood_group) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            } */}


                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Mother Tongue <span className="text-danger">*</span></label>
                                                <input className="form-control" defaultValue={this.state.mother_tongue} type="text" onChange={this.setMothertounge} />
                                            </div>
                                            {this.isBlank(this.state.mother_tongue) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Marriage Date<DatePicker
                                                    disabledDate={(current) => {

                                                        const start = Moment();
                                                        return current > start;
                                                    }}
                                                    value={

                                                        this.state.marrage_date ? Moment(this.state.marrage_date, 'YYYY-MM-DD') : Moment()} className="form-control floating datetimepicker" onChange={(e) => this.setMarriageDate(e)}></DatePicker> </label>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Marital status <span className="text-danger">*</span></label>
                                                <select value={this.state.marital_status} className=" form-control" onChange={this.setMarriageStatus}>
                                                    <option value="0">Select marital status</option>
                                                    <option>Single</option>
                                                    <option>Married</option>
                                                </select>
                                            </div>
                                            {this.isBlank(this.state.marital_status) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Religion</label>
                                                <input defaultValue={this.state.religion} className="form-control" type="text" onChange={this.setReligion} />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn" onClick={this.addPersonalInfoData}>Submit</button>
                                    </div>
                                    <label className="text-danger">{this.state.error}</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Personal Info Modal */}
                {/* Other Details Modal */}
                {/* <div id="other_details" className="modal custom-modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Other Details</h5>
                                <button type="button" className="close" onClick={this.closeOther}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="form-group">
                                                <label>Name</label>

                                                <input defaultValue={this.state.candidate_other_data.name} className="form-control" type="text" onChange={this.setNameAsDl} />

                                            </div>
                                           


                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Driving License No.{this.state.jobtype != "backoffice" ?

                                                    <span className="text-danger">*</span> : ''
                                                }</label>
                                                <input defaultValue={this.state.candidate_other_data.dl_no} className="form-control" type="text" onChange={this.setNameAsDlNo} />

                                            </div>

                                            {this.isBlank(this.state.candidate_other_data.dl_no) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }



                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Place of Issue{this.state.jobtype != "backoffice" ?

                                                    <span className="text-danger">*</span> : ''
                                                }</label>
                                                <input defaultValue={this.state.candidate_other_data.place_of_issue} className="form-control" type="text" onChange={this.setplaceOfIssue} />



                                            </div>
                                            {this.isBlank(this.state.candidate_other_data.place_of_issue) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }


                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Valid Upto (YYYY-MM-DD){this.state.jobtype != "backoffice" ?

                                                    <span className="text-danger">*</span> : ''
                                                }</label>

                                                <input defaultValue={this.state.candidate_other_data.valid_up_to} className="form-control" type="date" onChange={this.setValidUpto} />



                                            </div>
                                            {this.isBlank(this.state.candidate_other_data.valid_up_to) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }



                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Vehicle Number</label>

                                                <input defaultValue={this.state.candidate_other_data.vehicle_no} className="form-control" type="text" onChange={this.setVehicleNo} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>PAN Card Number<span className="text-danger">*</span></label>
                                                <input defaultValue={this.state.candidate_other_data.pan_card_no} className="form-control" type="text" onChange={this.setPanNo} />
                                            </div>
                                            {this.isBlank(this.state.candidate_other_data.pan_card_no) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }



                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Election ID Number </label>
                                                <input defaultValue={this.state.candidate_other_data.eid_no} className="form-control" type="text" onChange={this.setEidNo} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Aadhar card <span className="text-danger">*</span></label>

                                                <input className="form-control" type="text" readOnly defaultValue={this.state.candidate_other_data.aadhaar_no} />
                                            </div>
                                            {this.isBlank(this.state.candidate_other_data.aadhaar_no) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }




                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Old PF No.</label>

                                                <input defaultValue={this.state.candidate_other_data.uan} className="form-control" type="text" onChange={this.setPf} />
                                            </div>
                                            {this.isBlank(this.state.candidate_other_data.pf_no) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }


                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Old UAN No. </label>
                                                <input defaultValue={this.state.candidate_other_data.uan} className="form-control" type="text" onChange={this.setUan} />
                                            </div>

                                            {this.isBlank(this.state.candidate_other_data.uan) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Old ESIC No.</label>
                                                <input defaultValue={this.state.candidate_other_data.esic_no} className="form-control" type="text" onChange={this.setEsicNo} />
                                            </div>
                                            {this.isBlank(this.state.candidate_other_data.esic_no) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }



                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Old ESIC Dispensary Name.</label>
                                                <input defaultValue={this.state.candidate_other_data.esic_name} className="form-control" type="text" onChange={this.setEsicName} />
                                            </div>
                                            {this.isBlank(this.state.candidate_other_data.esic_name) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }



                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Old ESIC Dispensary Address</label>
                                                <input defaultValue={this.state.candidate_other_data.esic_address} className="form-control" type="text" onChange={this.setEsicAdd} />
                                            </div>



                                            {this.isBlank(this.state.candidate_other_data.esic_address) ?
                                                <span className="text-danger">{this.state.error1}</span>
                                                :
                                                ''
                                            }
                                        </div>
                                    </div>
                                    <div className="submit-section float-right">
                                        <button className="btn btn-primary submit-btn" onClick={this.addOtherDetails}>Save</button>
                                    </div>
                                    <label className="text-danger">{this.state.error}</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* /Other Details Modal */}
                {/* Document Checklist Modal */}
                <div id="document_checklist" className="modal custom-modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Document Checklist</h5>
                                <button type="button" className="close" onClick={this.closeDocument}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group row">
                                                <label className="col my-auto">{this.state.docname}</label>
                                                <input type="file" id="file-upload" className="form-control col"
                                                    onChange={(event) => this.onSelectFile(event)} /><label className="col my-auto">Max{ } Size{ } 10{ } mb</label>
                                            </div>

                                        </div>
                                        {/* {src && (
                                            <ReactCrop
                                                src={src}
                                                crop={crop}
                                                ruleOfThirds
                                                style={{ maxWidth: '30%', maxHeight: '30%' }}
                                                onImageLoaded={this.onImageLoaded}
                                                onComplete={this.onCropComplete}
                                                onChange={this.onCropChange}
                                            />
                                        )}
                                        {croppedImageUrl && (
                                            <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
                                        )} */}
                                    </div>

                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn" onClick={this.uploadDoc}>Submit</button>
                                    </div>
                                    <label className="text-danger">{this.state.error}</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Document Checklist Modal */}
                {/* Family Info Modal */}
                <div id="family_info_modal" className="modal custom-modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"> Family Details</h5>
                                <button type="button" className="close" onClick={this.closeFamilyDetails}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-scroll">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="card-title">Family Member
                              {/* <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a> */}
                                                </h3>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Name <span className="text-danger">*</span></label>
                                                            <input value={this.state.family_name} className="form-control" type="text" onChange={this.setFamilyName} />
                                                        </div>

                                                        {this.isBlank(this.state.family_name) ?
                                                            <span className="text-danger">{this.state.error1}</span>
                                                            :
                                                            ''
                                                        }


                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Relationship <span className="text-danger">*</span></label>
                                                            <select className="mb-3 form-control" value={this.state.family_relation} onChange={this.setFamilyRelation} >
                                                                {/* <option value='0'>Select Education Level </option> */}
                                                                <option value="0">Select Relationship</option>
                                                                <option value="mother">Mother</option>
                                                                <option value="father">Father</option>
                                                                <option value="spouse">Spouse</option>
                                                                <option value="son"> Son</option>
                                                                <option value="daughter">Daughter</option>
                                                            </select>
                                                            {/* <input className="form-control" type="text" value={this.state.family_relation} onChange={this.setFamilyRelation} /> */}
                                                        </div>


                                                        {this.isBlank(this.state.family_relation) ?
                                                            <span className="text-danger">{this.state.error1}</span>
                                                            :
                                                            ''
                                                        }


                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Date of birth <span className="text-danger">*</span><DatePicker
                                                                disabledDate={(current) => {

                                                                    const start = Moment();
                                                                    return current > start;
                                                                }} className="form-control floating datetimepicker" onChange={(e) => this.setFamilyDob(e)}></DatePicker> </label>
                                                        </div>

                                                        {/* {this.isBlank(this.state.family_dob =='Invalid date'? Moment(this.state.family_dob, 'YYYY-MM-DD') : Moment())?
                               <span className="text-danger">{this.state.error1}</span>
                               :
                               ''
                             } */}



                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Aadhar Number </label>
                                                            <input className="form-control" type="text" maxLength="12" value={this.state.family_adhar} onChange={this.setFamilyAdhar} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="checkbox" id="vehicle10" name="vehicle1" value="1" onChange={this.setIsNominee} />
                                                            <label className="ml-2">Is Nominee</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn" onClick={this.addFamilyData}>Submit</button>
                                    </div>
                                    <label className="text-danger">{this.state.error}</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Family Info Modal */}
                {/* Emergency Contact Modal */}
                <div id="emergency_contact_modal" className="modal custom-modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Alternate Details</h5>
                                <button type="button" className="close" type="button" className="close" onClick={this.closeRef}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="card">
                                        <div className="card-body">
                                            {/* <h3 className="card-title">1</h3> */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Name <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" value={this.state.ref_name} onChange={this.setReferencename} />
                                                    </div>

                                                    {this.isBlank(this.state.ref_name) ?
                                                        <span className="text-danger">{this.state.error1}</span>
                                                        :
                                                        ''
                                                    }



                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Relationship <span className="text-danger">*</span></label>
                                                        <input className="form-control" value={this.state.ref_relation} type="text" onChange={this.setReferencerleation} />
                                                    </div>


                                                    {this.isBlank(this.state.ref_relation) ?
                                                        <span className="text-danger">{this.state.error1}</span>
                                                        :
                                                        ''
                                                    }

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Phone <span className="text-danger">*</span></label>
                                                        <input className="form-control" value={this.state.ref_no} type="text" maxLength="10" value={this.state.ref_no} onChange={this.setReferenceNumber} />
                                                    </div>


                                                    {this.isBlank(this.state.ref_no) ?
                                                        <span className="text-danger">{this.state.error1}</span>
                                                        :
                                                        ''
                                                    }

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Location</label>
                                                        <input className="form-control" value={this.state.ref_loc} type="text" onChange={this.setReferenceLocation} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn" onClick={this.addRef}>Submit</button>
                                    </div>
                                    <label className="text-danger">{this.state.error}</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Emergency Contact Modal */}

                {/* Bank Modal */}
                <div id="bank_contact_modal" className="modal custom-modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Bank Details</h5>
                                <button type="button" className="close" onClick={this.closeBankDetails}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="card">
                                        <div className="card-body">
                                            {/* <h3 className="card-title">1</h3> */}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Bank Name <span className="text-danger">*</span></label>
                                                        <input type="text" value={this.state.bank_name} className="form-control" onChange={this.setBankName} />
                                                    </div>

                                                    {this.isBlank(this.state.bank_name) ?
                                                        <span className="text-danger">{this.state.error1}</span>
                                                        :
                                                        ''
                                                    }


                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Account number <span className="text-danger">*</span></label>
                                                        <input className="form-control" value={this.state.account_number} type="text" onChange={this.setAccountNo} />
                                                    </div>




                                                    {this.isBlank(this.state.account_number) ?
                                                        <span className="text-danger">{this.state.error1}</span>
                                                        :
                                                        ''
                                                    }
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Ifsc code <span className="text-danger">*</span></label>
                                                        <input className="form-control" value={this.state.ifsc_code} type="text" onChange={this.setIfsc_Code} />
                                                    </div>



                                                    {this.isBlank(this.state.ifsc_code) ?
                                                        <span className="text-danger">{this.state.error1}</span>
                                                        :
                                                        ''
                                                    }
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Branch Name</label>
                                                        <input className="form-control" value={this.state.branch_name} type="text" onChange={this.setBranchName} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="submit-section">
                                        <button onClick={this.addBankDetails} className="btn btn-primary submit-btn">Submit</button>
                                    </div>
                                    <label className="text-danger">{this.state.error}</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Bank Modal */}

                {/* Bank Modal */}
                <div id="confirm_contact_modal" className="modal custom-modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Please wait</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="card">
                                        <div className="card-body">
                                            {/* <h3 className="card-title">1</h3> */}
                                            <div className="row">

                                                <label className="text-danger">{this.state.error}</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="submit-section">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Bank Modal */}



                {/* Education Modal */}
                <div id="education_info" className="modal custom-modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"> Education Details</h5>
                                <button type="button" className="close" onClick={this.closeEducationDetails}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-scroll">
                                        {/* {education_list.map(education => ( */}
                                        <div className="card" >
                                            <div className="card-body">
                                                {/* <h3 className="card-title">10   */}
                                                {/* <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a> */}
                                                {/* </h3> */}
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        {/* <label>Education-Level</label> */}

                                                        <select className="mb-3 form-control" onChange={this.educationChane} >
                                                            {/* <option value='0'>Select Education Level </option> */}

                                                            <option value="10">10</option>
                                                            <option value="12">12</option>
                                                            <option value="graduate">Graduate</option>
                                                            <option value="post_graduate">Post Graduate</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group form-focus focused div1">
                                                            <input type="text" className="form-control floating" onChange={this.setSchool} value={this.state.school} />
                                                            <label className="focus-label">School/University<span className="text-danger">*</span></label>
                                                        </div>



                                                        {this.isBlank(this.state.school) ?
                                                            <span className="text-danger">{this.state.error1}</span>
                                                            :

                                                            ''
                                                        }
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group form-focus focused">
                                                            <input type="text" className="form-control floating" onChange={this.setLocationEducation} value={this.state.location} />
                                                            <label className="focus-label">Location</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group form-focus focused">
                                                            <div className="">
                                                                <input type="text" className="form-control floating datetimepicker" onChange={this.setPassingYear} value={this.state.passing_year} />
                                                            </div>
                                                            <label className="focus-label">Year of passing<span className="text-danger">*</span></label>
                                                        </div>



                                                        {this.isBlank(this.state.passing_year) ?
                                                            <span className="text-danger">{this.state.error1}</span>
                                                            :
                                                            ''
                                                        }
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group form-focus focused">
                                                            <input type="text" className="form-control floating" onChange={this.setBoard} value={this.state.board} />
                                                            <label className="focus-label">Board/University<span className="text-danger">*</span></label>
                                                        </div>


                                                        {this.isBlank(this.state.board) ?
                                                            <span className="text-danger">{this.state.error1}</span>
                                                            :
                                                            ''
                                                        }


                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group form-focus focused">
                                                            <input type="text" className="form-control floating" onChange={this.setDegree} value={this.state.degree} />
                                                            <label className="focus-label">Degree</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group form-focus focused">
                                                            <input type="text" className="form-control floating" value={this.state.percentage} onChange={this.setPercentage} />
                                                            <label className="focus-label">% Marks/Cgpa<span className="text-danger">*</span></label>
                                                        </div>



                                                        {this.isBlank(this.state.percentage) ?
                                                            <span className="text-danger">{this.state.error1}</span>
                                                            :
                                                            ''
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn" onClick={this.addEducationData}>Submit</button>
                                    </div>
                                    <label className="text-danger">{this.state.error}</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Education Modal */}
                {/* Experience Modal */}
                <div id="experience_info" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Experience Details</h5>
                                <button type="button" onClick={this.closeWorkDetails} className="close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-scroll">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="card-title">Experience Details
                              {/* <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a> */}
                                                </h3>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label className="focus-label">Organisation<span className="text-danger">*</span></label>
                                                        <div className="form-group form-focus">
                                                            <input type="text" placeholder="Organisation" className="form-control floating" onChange={this.setExperienceOrgination} value={this.state.experienceOrgination} />

                                                        </div>
                                                        {this.isBlank(this.state.experienceOrgination) ?
                                                            <span className="text-danger">{this.state.error1}</span>
                                                            :
                                                            ''
                                                        }

                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="focus-label">Reason for Separation</label>
                                                        <div className="form-group form-focus">
                                                            <input placeholder="Reason for Separation" type="text" className="form-control floating" onChange={this.setReason} value={this.state.reasonforSep} />

                                                        </div>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="focus-label">Designation<span className="text-danger">*</span></label>
                                                        <div className="form-group form-focus">
                                                            <input type="text" placeholder="Designation" className="form-control floating" onChange={this.setExprienceDesignation} value={this.state.exprienceDesignation} />

                                                        </div>

                                                        {this.isBlank(this.state.exprienceDesignation) ?
                                                            <span className="text-danger">{this.state.error1}</span>
                                                            :
                                                            ''
                                                        }

                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="focus-label">Period From<span className="text-danger">*</span></label>
                                                        <div className="form-group form-focus">
                                                            <div className="">

                                                                <DatePicker
                                                                    disabledDate={(current) => {

                                                                        const start = Moment();
                                                                        return current > start;
                                                                    }} className="form-control floating datetimepicker" onChange={(e) => this.setStartDate(e)}></DatePicker>
                                                            </div>

                                                        </div>


                                                        {this.isBlank(this.state.startDate_emp ? Moment(this.state.startDate_emp, 'YYYY-MM-DD') : Moment()) ?
                                                            <span className="text-danger">{this.state.error1}</span>
                                                            :
                                                            ''
                                                        }


                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="focus-label">Period To<span className="text-danger">*</span></label>
                                                        <div className="form-group form-focus">
                                                            <div className="">
                                                                <DatePicker
                                                                    disabledDate={(current) => {

                                                                        const start = Moment();
                                                                        return current > start;
                                                                    }} className="form-control floating datetimepicker" onChange={(e) => this.setEndDate(e)} maxDate={this.maxDate}
                                                                >    </DatePicker>
                                                                {/* <input type="text" className="form-control floating datetimepicker" onChange={this.} /> */}
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-primary submit-btn" onClick={this.addExperienceData}>Submit</button>
                                    </div>
                                    <label className="text-danger">{this.state.error}</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Experience Modal */}
            </div >



        );

    }
    //upload bank
    addBank = (self, bankname, branchname, acountno, ifsc, userid) => {
        console.log("bankdetails", bankname, branchname, acountno, ifsc, userid)
        
        if (this.isBlank(bankname) || this.isBlank(acountno) ||
            this.isBlank(ifsc)) {
            Swal.fire(
                '',
                'Please Fill All Reuired Field',
                'error'
            )

            // self.setState({ error: "Please fill all required details" })
        } else {
            
                const re=/^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/;
                // const value = e.target.value;
                if (ifsc.match(re)) {
                    console.log("valid ifsc")
                }else{
                    Swal.fire(
                        '',
                        'Please Enter Valid Ifsc Code',
                        'error'
                    )
                    return 
                }
           
            var data = JSON.stringify({
                "candidate": userid,
                "bank_name": bankname,
                "branch_name": branchname,
                "account_number": acountno,
                "ifsc_code": ifsc
            });
            console.log("called")
            var config = {
                method: 'post',
                url: baseurl + '/api/candidate/bank-details',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    // self.setState({ error: response.data.message })
                    if (response.data.status == true) {
                        self.setState({ bankflag: true })
                        // bankflag
                        Swal.fire(
                            'Bank Details Successfully Submitted ',
                            '',
                            'success'
                        )
                        //let path='app/profile/candidate-profile';
                        // alert(' ✅')
                        // $("#bank_contact_modal").modal("hide");
                        // self.setState({ error: "", error1: '' })
                        // window.location.reload(false);


                    }
                })
                .catch(function (error) {
                    console.log(error);
                    Swal.fire(
                        '',
                        'Network Issues Please Check Your Internet Connection',
                        'error'
                    )
                });
        }
    }
    alert = (data) => {
        confirmAlert({
            title: '' + data,
            message: '',
            buttons: [
                {
                    label: 'Ok',
                    onClick: () => {

                    }
                }
            ]
        })
    }
    //upload profile
    addProfileData = (self, data) => {
        console.log(data)

        // this.isBlank(data.name)
        // return
        if (this.isBlank(data.name) || this.isBlank(data.father_name) ||
            this.isBlank(data.c_country) || this.isBlank(data.gender) ||
            this.isBlank(data.c_state) || this.isBlank(data.c_city) ||
            this.isBlank(data.c_full_address) ||
            this.isBlank(data.c_pin_code) ||
            this.isBlank(data.p_country) || this.isBlank(data.p_state) || this.isBlank(data.c_email) ||
            this.isBlank(data.p_city) ||
            this.isBlank(data.p_full_address) || this.isBlank(data.p_pin_code) || this.isBlank(data.emergencyNo) || this.isBlank(data.contperson)

        ) {
            Swal.fire(
                '',
                'Please Fill All Reuired Field',
                'error'
            )
        } else if (data.name == data.contperson || data.p_mobile_no == data.emergencyNo || data.emergencyNo == data.c_mobile_no) {
            Swal.fire(
                '',
                'Person Name And Emergency Contact details can not be same',
                'error'
            )
        } else {

            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(String(data.c_email).toLowerCase()))
            {
                console.log("valid email")
            }else
            {
                Swal.fire(
                    '',
                    'Please enter valid email id',
                    'error'
                )
                return
            }
            // this.aler
            this.setState({ isProfile: true, error1: "" });
            // self.setState({ error: "Please wait profile is updating" })
            let formData = new FormData();
            formData.append("name", "" + data.name)
            formData.append("father_name", "" + data.father_name)
            formData.append("designation", "" + data.designation)
            formData.append("job_location", "" + data.job_location)
            formData.append("emergency_contact_name", "" + data.contperson)
            formData.append("emergency_contact_number", "" + data.emergencyNo)
            formData.append("department", "" + data.department)
            formData.append("communication_country", "" + data.c_country)
            formData.append("communication_state", "" + data.c_state)
            formData.append("communication_city", "" + data.c_city)
            formData.append("communication_landmark", "" + data.c_full_address)
            formData.append("communication_address", "" + data.c_full_address)
            formData.append("communication_mobile_no", "" + data.c_mobile_no)
            formData.append("communication_email", "" + data.c_email)
            formData.append("communication_pin_code", "" + data.c_pin_code)
            formData.append("permanenet_country", "" + data.p_country)
            formData.append("permanenet_state", "" + data.p_state)
            formData.append("permanenet_city", "" + data.p_city)
            formData.append("permanenet_landmark", "" + data.p_full_address)
            formData.append("permanenet_address", "" + data.p_full_address)
            formData.append("permanenet_mobile_no", "" + data.p_mobile_no)
            formData.append("email", "" + data.c_email)
            formData.append("permanenet_pin_code", "" + data.p_pin_code)
            formData.append("dob", "" + Moment(data.dob).format("YYYY-MM-DD"))
            // formData.append("marital_status",""+data.marital_status)
            // formData.append("marrage_date",""+data.marrage_date)
            formData.append("gender", "" + data.gender)
            formData.append("category", "" + data.category)
            // formData.append("nationality",""+data.nationality)
            // formData.append("blood_group",""+data.blood_group)
            // formData.append("mother_tongue",""+data.mother_tongue)
            //  formData.append("religion",""+data.religion)
            formData.append("candidate", "" + data.user)
            formData.append("recruiter_id", "" + data.created_by)
            formData.append("profile_picture", data.profilepic1)
            // const aa = [...formData.entries()];
            // console.log("profiledtat"+aa)
            var config = {
                method: 'post',
                url: baseurl + '/api/candidate/personal-details',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    if (response.data.status == true) {
                        //let path='app/profile/candidate-profile';
                        // alert('Personal details successfully submitted ✅')
                        // window.location.reload(false);
                        // $("#profile_info").modal("hide");
                        // self.setState({ error: "", error1: '' })
                        Swal.fire(
                            'Personal Details Successfully Submitted ',
                            '',
                            'success'
                        )
                        // Swal.fire({
                        //     title: 'Are you sure?',
                        //     text: 'You will not be able to recover this imaginary file!',
                        //     icon: 'warning',
                        //     showCancelButton: true,
                        //     confirmButtonText: 'Ok',
                        //     // cancelButtonText: 'No, keep it'
                        //   }).then((result) => {
                        //     if (result.value) {
                        //     //   Swal.fire(
                        //     //     'Deleted!',
                        //     //     'Your imaginary file has been deleted.',
                        //     //     'success'
                        //     //   )
                        //     // For more information about handling dismissals please visit
                        //     // https://sweetalert2.github.io/#handling-dismissals
                        //     } 
                        //     // else if (result.dismiss === Swal.DismissReason.cancel) {
                        //     //   Swal.fire(
                        //     //     'Cancelled',
                        //     //     'Your imaginary file is safe :)',
                        //     //     'error'
                        //     //   )
                        //     // }
                        //   })

                    } else {
                        Swal.fire(
                            'Network Issue',
                            '',
                            'error'
                        )

                    }

                    // self.setState({ error: response.data.message })
                })
                .catch(function (error) {
                    console.log(error);
                    Swal.fire(
                        '',
                        'Network Issues Please Check Your Internet Connection',
                        'error'
                    )
                });
        }
    }
    //add experiences
    addExperience = (self, data) => {

        console.log("Experience", data)

        console.log("called")

        if (this.isBlank(data.organization) || this.isBlank(data.start_date) || this.isBlank(data.end_date)) {
            Swal.fire(
                '',
                'Please Fill All Required Details',
                'error'
            )
            // self.setState({ error: "Please fill all required details" })
        } else {



            var config = {
                method: 'post',
                url: baseurl + '/api/candidate/work-experience',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {

                    // self.setState({ error: response.data.message })
                    console.log(JSON.stringify(response.data));
                    if (response.data.status == true) {
                        self.setState({ expvar: false, experienceOrgination: '', exprienceDesignation: '', reasonforSep: '', enddate_emp: '', startDate_emp: '', experror: "", error1: '' })
                        //let path='app/profile/candidate-profile';
                        // alert(' ✅')
                        // $("#experience_info").modal("hide");
                        Swal.fire(
                            'Work Experience Details Successfully Submitted ',
                            '',
                            'success'
                        )
                        self.apicall();
                        // self.closeWorkDetails();
                        //  $("#experience_info").modal("hide");


                    }
                })
                .catch(function (error) {
                    console.log(error);
                    Swal.fire(
                        '',
                        'Network Issues Please Check Your Internet Connection',
                        'error'
                    )
                });
        }
    }
    //add family
    addFamily = (self, data) => {

        console.log("Family" + JSON.stringify(data))

        console.log("called")
        if (this.isBlank(data.name) || this.isBlank(data.relation)) {
            Swal.fire(
                '',
                'Please Fill All Required Details',
                'error'
            )
            // self.setState({ error: "" })
        } else if (data.relation == "0") {
            Swal.fire(
                '',
                'Please Fill All Required Details',
                'error'
            )
        } else {
            self.setState({
                familyflag: true,
                error: "", error1: '', family_adhar: '',
                family_name: '',
                addfamilyvar: false,
                family_relation: '',
                family_adhar: '',
                isNomniee: false,
                family_dob: undefined
            })
            var config = {
                method: 'post',
                url: 'https://aadhaan.ddns.net/api/candidate/family-details',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    // self.setState({ error: response.data.message })
                    console.log(JSON.stringify(response.data));
                    if (response.data.status == true) {
                        //let path='app/profile/candidate-profile';
                        // alert(' ✅')
                        Swal.fire(
                            'Family Details Successfully Submitted ',
                            '',
                            'success'
                        )
                        self.apicall();
                        // self.closeFamilyDetails();
                        // $("#family_info_modal").modal("hide");


                    }
                })
                .catch(function (error) {
                    console.log(error);
                    Swal.fire(
                        '',
                        'Network Issues Please Check Your Internet Connection',
                        'error'
                    )
                });
        }
    }
    addOtherDetailsData = (self, data) => {
        // console.log("ggg", data);
        // console.log(JSON.stringify(data));
        if (this.state.jobtype != "backoffice") {
            if (this.isBlank(data.dl_no) || this.isBlank(data.place_of_issue) || this.isBlank(data.valid_up_to)) {
                //    / self.setState({ error: "" })
                Swal.fire(
                    '',
                    'Please Fill All Required Details',
                    'error'
                )
                return
            }
        }
        // else {

        self.setState({ error: "", error1: '' })
        var config = {
            method: 'PUT',
            url: 'https://aadhaan.ddns.net/api/candidate/miscellaneous-other-details',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };

        axios(config)
            .then(function (response) {
                // self.setState({ error: response.data.message })

                if (response.data.status == true) {
                    //let path='app/profile/candidate-profile';
                    // alert('Other presonal details successfully submitted ✅')
                    // self.closeOther();

                    // window.location.reload(false);
                    Swal.fire(
                        'Personal Details Successfully Submitted ',
                        '',
                        'success'
                    )


                } else {
                    Swal.fire(
                        '',
                        'Network Issues Please Check Your Internet Connection',
                        'error'
                    )
                }
            })
            .catch(function (error) {
                Swal.fire(
                    '',
                    'Network Issues Please Check Your Internet Connection',
                    'error'
                )
            });

        // }
    }
    //add personal info
    addpersonalInfo = (self, data) => {
        data.candidate = data.id
        if (this.isBlank(data.nationality) ||
            this.isBlank(data.mother_tongue) || this.isBlank(data.category)) {
            Swal.fire(
                '',
                'Please Fill All Reuired Field',
                'error'
            )
            // self.setState({ error: "Please fill all required details", error1: "This field can not be empty" })
        } else {
            // isProfile:false,

            self.setState({ error1: "", otherdetolsFlag: true })
            let statusm = '';
            if (data.marital_status == "Single") {
                statusm = "un_married"
                data.marrage_date = null
            } else {
                statusm = "married"
            }
            console.log("addpersonalInfo" + JSON.stringify(data))
            var data = JSON.stringify({
                // "marital_status":data.marital_status.toLowerCase() ,

                "marital_status": statusm,
                "marrage_date": data.marrage_date,
                "gender": data.gender,
                "category": data.category,
                "nationality": data.nationality,
                "blood_group": data.blood_group,
                "mother_tongue": data.mother_tongue,
                "religion": data.religion,
                "candidate": data.user,

            });
            console.log("called", data)
            var config = {
                method: 'PUT',
                url: 'https://aadhaan.ddns.net/api/candidate/personal-information',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    self.setState({ error: response.data.message })
                    console.log(JSON.stringify(response.data));
                    if (response.data.status == true) {
                        //let path='app/profile/candidate-profile';
                        Swal.fire(
                            'Personal Details Successfully Submitted ',
                            '',
                            'success'
                        )
                        // alert('Personal details successfully submitted ✅')
                        // window.location.reload(false);

                        // self.closePersonalDetails();

                    } else {
                        Swal.fire(
                            'Network Issue ',
                            '',
                            'error'
                        )
                    }
                })
                .catch(function (error) {
                    Swal.fire(
                        '',
                        'Network Issues Please Check Your Internet Connection',
                        'error'
                    )
                });
        }
    }
    //upload doc
    documentUpload = (self, data, document_type, candidate) => {
        console.log("dadsggshfdhgdsghffsd" + JSON.stringify(data))


        // self.setState({ error: "Please wait file is uploading" })
        let formData = new FormData();
        formData.append("document_type", "" + document_type)
        formData.append("document", data)
        formData.append("candidate", "" + candidate)

        console.log("documentData" + formData)
        var config = {
            method: 'post',
            url: baseurl + '/api/candidate/documents-upload',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        };

        axios(config)
            .then(function (response) {
                $("#file-upload").val("")
                console.log(JSON.stringify(response.data));
                self.setState({ resume_file: '', docname: '' });
                if (response.data.status == true) {
                    //let path='app/profile/candidate-profile';
                    // alert(document_type + ' uploaded successfully  ✅')
                    self.apicall();

                    self.closeDocument();

                    Swal.fire(
                        document_type + '',
                        ' Uploaded Successfully.',
                        'success'
                    )
                    //    window.location.reload(false);

                } else {
                    Swal.fire(
                        '',
                        'Network Issues Please Check Your Internet Connection',
                        'error'
                    )
                }
            })
            .catch(function (error) {
                Swal.fire(
                    '',
                    'Network Issues Please Check Your Internet Connection',
                    'error'
                )
            });


    }
    //add education
    addEducation = (self, data) => {

        console.log("Education" + JSON.stringify(data))

        if (this.isBlank(data.passing_year)) {
            Swal.fire(
                '',
                'Please Fill All Reuired Field',
                'error'
            )
        } else {
            console.log("called")
            var config = {
                method: 'post',
                url: 'https://aadhaan.ddns.net/api/candidate/education-data',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {

                    console.log(JSON.stringify(response.data));
                    self.setState({ eduvar: false, error: '', eductionerro: '', degree: '', school: '', experror: '', edu_location: '', passing_year: '', percentage: '', board: '', location: '' })
                    if (response.data.status == true) {
                        Swal.fire(
                            'Education Details Successfully Submitted ',
                            '',
                            'success'
                        )
                        //let path='app/profile/candidate-profile';
                        // alert(' ✅')
                        self.apicall();
                        //  $("#education_info").modal("hide");

                        // self.closeEducationDetails()

                    } else {
                        Swal.fire(
                            '',
                            'Network Issues Please Check Your Internet Connection',
                            'error'
                        )
                    }

                })
                .catch(function (error) {
                    Swal.fire(
                        '',
                        'Network Issues Please Check Your Internet Connection',
                        'error'
                    )
                });
        }
    }
    //add references
    addReference = (self, data) => {

        console.log("refrences" + JSON.stringify(data))
        if (this.isBlank(data.name) ||
            this.isBlank(data.relationship) || this.isBlank(data.mobile_no)) {
            Swal.fire(
                '',
                'Please Fill All Reuired Field',
                'error'
            )
        }
        else {
            console.log("called")
            var config = {
                method: 'post',
                url: baseurl + '/api/candidate/reference-details',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    // self.setState({ error: response.data.message })
                    // alert('Alternate  details successfully submitted ✅')
                    self.apicall();
                    self.setState({ referror: '', addrefvar: false, ref_name: '', ref_loc: '', ref_relation: '', ref_no: '' });
                    Swal.fire(
                        'Reference  Details Successfully Submitted ',
                        '',
                        'success'
                    )
                    // self.apicall();
                    // self.closeRef();
                })
                .catch(function (error) {
                    Swal.fire(
                        '',
                        'Network Issues Please Check Your Internet Connection',
                        'error'
                    )
                });
        }
    }
    closeProfile = (e) => {
        // e.preventDefault();

        this.setState({ error: "", error1: '' })
        $("#profile_info").modal("hide");
    }
    closeRef = (e) => {
        // e.preventDefault();

        this.setState({ error: "", error1: '', ref_loc: '', ref_name: '', ref_relation: "", ref_no: "" })
        $("#emergency_contact_modal").modal("hide");
    }
    closeFamilyDetails = (e) => {
        // e.preventDefault();

        this.setState({ error: "", error1: '', family_name: '', family_relation: '', family_adhar: '' })
        $("#family_info_modal").modal("hide");
    }
    closeBankDetails = (e) => {
        // e.preventDefault();

        this.setState({ error: "", error1: '' })
        $("#bank_contact_modal").modal("hide");
    }
    closePersonalDetails = (e) => {
        // e.preventDefault();

        this.setState({ error: "", error1: '' })
        $("#personal_info_modal").modal("hide");
    }
    closeEducationDetails = (e) => {
        // e.preventDefault();



        this.setState({ error: "", error1: '', percentage: '', passing_year: '', location: '', school: '', board: '', degree: '' })
        $("#education_info").modal("hide");
    }
    closeWorkDetails = (e) => {
        // e.preventDefault();

        this.setState({ error: "", error1: '', experienceOrgination: '', exprienceDesignation: '', reasonforSep: '' })
        $("#experience_info").modal("hide");
    }
    closeDocument = (e) => {
        // e.preventDefault();
        $("#file-upload").val("")
        this.setState({ error: "", error1: '', resume_file: '', docname: '' })
        $("#document_checklist").modal("hide");
    }
    closeOther = (e) => {
        // e.preventDefault();

        this.setState({ error: "", error1: '' })
        $("#other_details").modal("hide");
    }
}

