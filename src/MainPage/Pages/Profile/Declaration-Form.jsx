import React, { Component } from 'react';
import {Table} from 'react-table';
import { epfs, Sign } from '../../../Entryfile/imagepath.jsx'
var axios = require('axios');
var baseurl = 'https://aadhaan.ddns.net';



const ref = React.createRef();
class DeclrationForm extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("count") == 2) {
            window.location.reload(false);
            localStorage.setItem("count", 3);
        }
       this.state = this.props.location.state
      
    
    }

    savebtn = (e) => {
        var self =this;
        var data = JSON.stringify({
                    "candidate": localStorage.getItem("can"),
                    
                });
                console.log("called")
                var config = {
                    method: 'post',
                    url: baseurl + '/api/v1/candidate-percentage',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };
    
                axios(config)
                    .then(function (response) {
                        console.log(JSON.stringify(response.data));
                        // self.setState({ error: response.data.message })
                        // if (response.data.status == true) {
                            let path = './Esic-declrationForm';
                            var id = self.props.location.state.user
                            // alert("iiiiid",id)
                            console.log("hhhhhhhhh", id)
                            self.setState({ id: id, back: true });

                            self.props.history.push({
                                pathname: path,
                                state: self.state

                            })
                       

                    // }
                })
                .catch(function (error) {
                    // console.log(error);
                    // self.setState({ error: "network issue" })
                });
                      
       

    }
    addEducationData = (e) => {
        e.preventDefault();
        this.setState({ error1: "This field can not be empty" })
        var data = { "degree": this.state.degree, "board_university": this.state.board, "school": this.state.school, "location": this.state.edu_location, "passing_year": this.state.passing_year, "percentage": this.state.percentage, "candidate": this.state.user, "education_level": this.state.edulevel }
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
    
    setName = (e) => {
        console.log("25", this.state.name)
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ name: value });
        console.log("25",this.state.name)

    }
   


    setFat_Name = (e) => {
        console.log("25", this.state.father_name)
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ father_name: value });
        console.log("25", this.state.father_name)

    }
    setDob = (e) => {
        console.log("25", this.state.dob)
        const value = e.format();

        this.setState({ dob: Moment(value).format('YYYY-MM-DD') });

    }
    setgender = (e) => {
        console.log("25", this.state.gender)

        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ gender: value });
        console.log("25", this.state.gender)

    }
    setcurrentFullAdd = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ c_full_address: value });
        console.log("25", this.state.c_full_address)
    }
    setcurrentState = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ c_state: value });
        console.log("25", this.state.c_state)
    }
    setcurrentCity = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ c_city: value, job_location: value });
        console.log("25", this.state.c_city)

    }
    setPermnanetCity = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ p_city: value, job_location: value });

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
        console.log("25", this.state.c_pin_code)
    }
    setcurrentPhone = (e) => {
        const re = /^[0-9]+$/;
        const value = e.target.value;
        // alert("got data"+value)
        if (value === '' || value.match(re)) {
            this.setState({ c_mobile_no: value });
        }
        console.log("25", this.state.c_mobile_no)

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
        console.log("25", this.state.p_mobile_no)
    }
    setDepartment = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ department: value });
        console.log("25", this.state.department)

    }
    setDesigination = (e) => {
        const value = e.target.value;
        // alert("got data"+value)

        this.setState({ designation: value });
        console.log("25", this.state.designation)
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
        console.log("c_email", this.state.c_email)
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
        console.log("c_email", this.state.c_email)

    }
    setMarriageStatus = (e) => {
        const value = e.target.value;

        if (value != 0) {
            // alert("dfgdgfdf"+ value)
            this.setState({ marital_status: value })
        }
        console.log("marrige", this.state.marital_status)

    }
    setReligion = (e) => {
        const value = e.target.value;
        this.setState({ religion: value })
        console.log("religion", this.state.religion)

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
        e.preventDefault();
        this.setState({ error1: "This field can not be empty" })
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
        console.log("00", this.state.family_relation)
    }
    setFamilyDob = (e) => {
        const value = e.format();
        this.setState({ family_dob: Moment(value).format('YYYY-MM-DD') });
        console.log("00", this.state.family_dob)
    }
    setDocName(value) {
        // let val = e.target.dataset.value;
        console.log(value);

        this.setState({ docname: value, crop: '', croppedImageUrl: '', src: '' })
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
    setPanNo = (e) => {
        e.preventDefault();
        const value = e.target.value;
        var data = { "name": this.state.candidate_other_data.name, "esic_address": this.state.candidate_other_data.esic_address, "esic_name": this.state.candidate_other_data.esic_name, "esic_no": this.state.candidate_other_data.esic_no, "uan": this.state.candidate_other_data.uan, "pf_no": this.state.candidate_other_data.pf_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no, "eid_no": this.state.candidate_other_data.eid_no, "pan_card_no": value, "vehicle_no": this.state.candidate_other_data.vehicle_no, "valid_up_to": this.state.candidate_other_data.valid_up_to, "place_of_issue": this.state.candidate_other_data.place_of_issue, "dl_no": this.state.candidate_other_data.dl_no }
        this.setState({ candidate_other_data: data });
        console.log("00", this.state.family_dob)
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
        console.log("00", this.state.uan)
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



    render() {
        // const candidate_name = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

        // const candidate_doc_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        // const candidate_dob_list = [1, 2, 3, 4, 5, 6,7,8]
        // const candidate_name_list = [1, 2, 3]
        // const candidate_fname_list = [1, 2]
        // const candidate_gender_list = [1, 2, 3]
        // const candidate_mobile_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // const candidate_email_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
        // const candidate_uan_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        // const member_id_date = [1, 2, 3, 4, 5, 6, 7, 8]
        // const passport_valid_from = [1, 2, 3, 4, 5, 6, 7, 8]
        // const passport_valid_till = [1, 2, 3, 4, 5, 6, 7, 8]
        // const emp_code_no = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20]
        // const pin_code = [1, 2, 3, 4, 5, 6]
        var candidate_documents_data = this.state.candidate_documents_data
        const edu_data = this.state.education_data
        try {
            console.log('wwww', this.state.candidate_doc_list)
            console.log('twinkle', this.state)
            console.log("show", this.state.education_data['10'].degree)
            console.log("show", this.state.education_data['12'].degree)
            console.log("show", this.state.education_data['graduate'].degree)
            console.log("show", this.state.education_data['post_graduate'].degree)
            console.log("show", this.state._12thdata)
            console.log('sssss', this.state.candidate_documents_data[1].document_type);
            console.log('sssss', this.state.candidate_documents_data[0].document_type)
           
            candidate_documents_data = { 'document_type': this.candidate_documents_data[0].document_type }

            

        }
        catch (err) {
            console.log(err)
        }


       
        var otherdetails = {
            "name": '', "dl_no": "", "place_of_issue": "", "valid_up_to": "", "vehicle_no": "",
            "pan_card_no": "", "eid_no": "", "aadhaar_no": "", "pf_no": '', "uan": "", "esic_no": "", "esic_name": "", "esic_address": ""
        }

        try {
            console.log(this.state)
            otherdetails = {
                "name": this.state.candidate_other_data.name, "dl_no": this.state.candidate_other_data.dl_no,
                "place_of_issue": this.state.candidate_other_data.place_of_issue, "valid_up_to": this.state.candidate_other_data.valid_up_to,
                "vehicle_no": this.state.candidate_other_data.vehicle_no, "pan_card_no": this.state.candidate_other_data.pan_card_no,
                "eid_no": this.state.candidate_other_data.eid_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no,
                "pf_no": this.state.candidate_other_data.pf_no, "uan": this.state.candidate_other_data.uan,
                "esic_no": this.state.candidate_other_data.esic_no, "esic_name": this.state.candidate_other_data.esic_name,
                "esic_address": this.state.candidate_other_data.esic_address
            }
        }

        catch (err) {
            console.log("hjhj", err);
        }

        //work experience
        var work_experience = { "organization": '', "designation": '', "end_date": '', "reason_for_leaving": '', 'start_date': '' }

        try {
            console.log("tttt", this.state.candidate_work_history_data[0].organization);
            work_experience = {
                "organization": this.state.candidate_work_history_data[0].organization, "designation": this.state.candidate_work_history_data[0].designation,
                "end_date": this.state.candidate_work_history_data[0].end_date, "reason_for_leaving": this.state.candidate_work_history_data[0].reason_for_leaving,
                "start_date": this.state.candidate_work_history_data[0].start_date
            }
        }
        catch (err) {
            console.log("ttt", err);
        }

        var work_experience1 = { "organization": '', "designation": '', "end_date": '', "reason_for_leaving": '', 'start_date': '' }

        try {
            console.log("tttt", this.state.candidate_work_history_data[1].organization);
            work_experience1 = {
                "organization": this.state.candidate_work_history_data[1].organization, "designation": this.state.candidate_work_history_data[1].designation,
                "end_date": this.state.candidate_work_history_data[1].end_date, "reason_for_leaving": this.state.candidate_work_history_data[1].reason_for_leaving,
                "start_date": this.state.candidate_work_history_data[1].start_date
            }
        }
        catch (err) {
            console.log("ttt", err);
        }
       
        var work_experience2 = { "organization": '', "designation": '', "end_date": '', "reason_for_leaving": '', 'start_date': '' }

        try {
            console.log("tttt", this.state.candidate_work_history_data[2].organization);
            work_experience2 = {
                "organization": this.state.candidate_work_history_data[2].organization, "designation": this.state.candidate_work_history_data[2].designation,
                "end_date": this.state.candidate_work_history_data[2].end_date, "reason_for_leaving": this.state.candidate_work_history_data[2].reason_for_leaving,
                "start_date": this.state.candidate_work_history_data[2].start_date
            }
        }
        catch (err) {
            console.log("ttt", err);
        }



        //family data
        var family = { "name": '', "aadhaar_no": '', "dob": '', 'is_nominee': '', 'relation': '' }
        try {
            console.log('family1111', this.state.family)
            family = {
                'name': this.state.family[0].name, 'aadhaar_no': this.state.family[0].aadhaar_no,
                'dob': this.state.family[0].dob, 'is_nominee': this.state.family[0].is_nominee, 'relation': this.state.family[0].relation
            }
        }

        catch (err) {
            console.log("family111", err);
        }


//education data
        var _10thdata = {
            "degree": '', "board_university": "", "location": "",
            "percentage": "",
            "school": "", "passing_year": ""
        }
        try {
            _10thdata = {
                "degree": this.state.education_data[10].degree, "board_university": this.state.education_data[10].board_university, "location": this.state.education_data[10].location,
                "percentage": this.state.education_data[10].percentage,
                "school": this.state.education_data[10].school, "passing_year": this.state.education_data[10].passing_year
            }
            console.log("hjhj", _10thdata);
          
        } catch (err) {
            console.log("hjhj", err)
        }



        var _12thdata = {
            "degree": '', "board_university": "", "location": "",
            "percentage": "",
            "school": "", "passing_year": ""
        }
        try {
            _12thdata = {
                "degree": this.state.education_data[12].degree, "board_university": this.state.education_data[12].board_university, "location": this.state.education_data[12].location,
                "percentage": this.state.education_data[12].percentage,
                "school": this.state.education_data[12].school, "passing_year": this.state.education_data[12].passing_year
            }
            console.log("hjhj", _12thdata);
        } catch (err) {
            console.log("hjhj", err)
        }


        var graduate = {
            "degree": '', "board_university": "", "location": "",
            "percentage": "",
            "school": "", "passing_year": ""
        }
        try {
            graduate = {
                "degree": this.state.education_data['graduate'].degree, "board_university": this.state.education_data['graduate'].board_university, "location": this.state.education_data['graduate'].location,
                "percentage": this.state.education_data['graduate'].percentage,
                "school": this.state.education_data['graduate'].school, "passing_year": this.state.education_data['graduate'].passing_year
            }
        } catch (err) {
            console.log("hjhj", err)
        }

        var post_graduate = {
            "degree": '', "board_university": "", "location": "",
            "percentage": "",
            "school": "", "passing_year": ""
        }
        try {
            post_graduate = {
                "degree": this.state.education_data['post_graduate'].degree, "board_university": this.state.education_data['post_graduate'].board_university, "location": this.state.education_data['post_graduate'].location,
                "percentage": this.state.education_data['post_graduate'].percentage,
                "school": this.state.education_data['post_graduate'].school, "passing_year": this.state.education_data['post_graduate'].passing_year
            }
            console.log("hjhj", post_graduate);
        } catch (err) {
            console.log("hjhj", err)
        }


        return (

            <div className="container" style={{
                marginTop: '8em', transform: 'inherit',
                position: 'inherit',
                left: 'inherit',
                top: 'inherit'
            }}>
                <div className="border" ref={ref}>

                   

                    <div className="row " style={{ marginTop: '5%', marginLeft: 'none', marginRight: 'none' }}>

                        

                       
                        <div className="col-md-12">
                            {/* <div className="account-logo" style={{ float: "left", marginRight: '60px' }}>
                                <a href=""><img src={Applogo} alt="Adhaan" /></a>
                            </div> */}
                            <div style={{ float: 'right', }}>
                                <h3 className='font-weight-bold'>DECLARATION FORM</h3>
                                <p>(To be retained by the Employer for future reference</p>
                            </div>
                          
                            <div className="account-logo float-left">
                                <a href="#"><img src={epfs} alt="Adhaan" /></a>
                            </div>

                            <div className="text-center mr-3" style={{marginTop:'7%'}}>
                                <h3 className='font-weight-bold'>
                                    EMPLOYEES PROVIDENT FUND ORGANIZATION</h3>
                                <div className="  title-text-sm font-weight-bold">
                                    THE EMPLOYEES PROVIDENT FUNDS SCHEME, 1952 (PARAGRAPH-34 & 57)
                            <br />
                        &<br />
                        THE EMPLOYEES PENSION SCHEME, 1995 (PARAGRAPH-24)
                        <br /><br />

                                </div>
                                <div className="font-weight-bold">
                                    <p>
                                        <u>DECLARATION BY A PERSON TAKING UP EMPLOYMENT IN AN ESTABLISHMENT ON WHICH EMPLOYEES PROVIDENT FUND SCHEME,<br />
                            1952 AND/OR EMPLOYEES PENSION SCHEME, 1995 IS APPLICABLE.<br />
                               (PLEASE GO THROUGH THE INSTRUCTIONS)</u></p>

                                </div>
                            </div>







                            <div className="row" style={{ border: '1px solid', marginRight: '30px', marginLeft: '30px' }} >
                                <div className="col-md-12">

                                <div className="row">
                                    <div className=" mt-3 col-md-4 font-weight-bold">
                                   
                            1) &nbsp; NAME &nbsp; &nbsp; (TITLE)<br />
                                        <div className=" "  style={{ display: 'inline-flex' , marginLeft:'30%'}} >
                                            <div className='border border-dark' style={{ width: '40px', height: '30px' }}>MR.</div>
                                            <div className='border border-dark' style={{ width: '40px', height: '30px' }}>Ms.</div>
                                            <div className='border border-dark' style={{ width: '40px', height: '30px' }}>MRs.</div>
                                       <br />
                                        </div>
                                        <p  style={{ marginLeft: '30%'}}>(PLEASE TICK)</p>
                                       

                                   

                                </div>
                             <div className="col-md-8">

                                <div className="mt-3" style={{ marginLeft: '30px' }}>
                                    {/* <div style={{ display: 'inline-flex' }}>
                                                    {candidate_name.map(document => (

                                                        <input defaultValue={this.state.name} key={document.key} type="text" style={{ width: '4%' }}></input>
                                        ))}
                                    </div><br></br>
                                    <div style={{ display: 'inline-flex', marginTop: '-7px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input defaultValue={this.state.name} key={document.key} type="text" style={{ width: '4%' }}></input>
                                            
                                        ))}<br />


                                    </div><br></br>

                                    <div style={{ display: 'inline-flex', marginTop: '-7px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input defaultValue={this.state.name} key={document.key} type="text" style={{ width: '4%' }}></input>
                                           
                                        ))}


                                    </div> */}
                                                <input className="text-center" onChange={this.setName} defaultValue={this.state.name} key={document.key} type="text" style={{ width: '30%' }}></input>
                                 </div>  
                                 
                             </div>
                              </div> 
                               </div>




                               


                                <div className="col-md-12 mt-3">
                                    <div className="row">
                                    <div className=" col-md-4  float-left font-weight-bold" >
                                        
                            2) &nbsp; Date &nbsp; OF &nbsp; Birth<br /><br />
                                                {/* <div className='border border-dark' style={{ width: '40px', height: '30px' }}>MR.</div> */}
                                    </div>
                                    <div className="col-md-8" >
                                        {/* <div className=" text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                        </div><br></br> */}
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {/* {candidate_dob_list.map(document => (
                                                <input defaultValue={this.state.dob} key={document.key} type="text" style={{ width: '27px' }}></input>
                                                // <li key={document.key} >

                                                // </li>
                                            ))} */}
                                               
                                                <input onChange={(e) => this.setDob(e)} defaultValue={this.state.dob} key={document.key} type="text" style={{ width: '100%' }}></input>
                                                  
                                             

                                        </div><br />


                                    </div><br />


                                </div>
                                </div>
                                <br />












                                <div className="col-md-12 mt-3" style={{marginTop:'3%'}} >
                                    <div className="row">

                                    <div className=" col-md-4  float-left font-weight-bold" >
                                       
                           3) &nbsp; FATHERS /<br />
                              HUSBANDS NAME<br /><br />

                                    </div>

                             <div className="col-md-8">
                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                                {/*  {candidate_doc_list.map(document => (

                                            <input key={document.key} type="text" style={{ width: '30px' }}></input>
                                        ))}
                                    </div><br></br>
                                    <div style={{ display: 'inline-flex', marginTop: '-7px', marginLeft: '30px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input defaultValue={this.state.father_name}key={document.key} type="text" style={{ width: '30px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}<br />


                                    </div><br></br>

                                    <div style={{ display: 'inline-flex', marginTop: '-7px', marginLeft: '30px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input key={document.key} type="text" style={{ width: '30px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}


                                    <br /><br /> */}
                                            </div>
                                            
                                            <input onChange={this.setFat_Name} defaultValue={this.state.father_name} key={document.key} type="text" style={{ width: '30%' }}></input>
                                              
                                        </div>    </div>   </div><br />






                                <div className="col-md-12 mt-3"  >
                                    <div className="row">
                                    <div className=" col-md-4 float-left font-weight-bold" >
                                        
                           4) &nbsp; RELATIONSHIP IN RESPECT<br />
OF (3) ABOVE (PLEASE TICK)<br /><br />

                                    </div>
                                    <div className="col-md-8">
                                  
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            {/* <div className='border border-dark' style={{ width: '100px', height: '27px' }}>FATHER</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '27px' }}>HUSBAND</div>

                                        </div><br></br>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {candidate_fname_list.map(document => (
                                                <input key={document.key} type="text" style={{ width: '100px' }}></input>

                                            ))}

                                    <br /> */}

                                                <input onChange={this.setReligion} defaultValue={family.relation} type="text" ></input>
                                        </div>


                                             </div><br />


                               </div> </div><br />

                                <div className="col-md-12 mt-3"  >
<div className="row">
                                    <div className=" col-md-4 float-left font-weight-bold" >
                                        
                          5) &nbsp; GENDER<br /> (PLEASE TICK))<br /><br />

                                    </div>
                                    <div  className="col-md-8">
                                        {/* <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '120px', height: '27px' }}>MALE</div>
                                            <div className='border border-dark' style={{ width: '120px', height: '27px' }}>FEMALE</div>
                                            <div className='border border-dark' style={{ width: '120px', height: '27px' }}>TRANSGENDER</div>

                                        </div>*/}<br></br>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {/* {candidate_gender_list.map(document => (
                                                <input defaultValue={this.state.gender} key={document.key} type="text" style={{ width: '120px' }}></input>

                                            ))} */}
                                                <input onChange={this.setgender} defaultValue={this.state.gender} key={document.key} type="text" style={{ width: '120px' }}></input>


                                        </div><br />


                                    </div><br />


                                    </div>      </div>




                                <div className="col-md-12 mt-3"  >
<div className="row">
                                    <div className=" col-md-4 float-left font-weight-bold" >
                                        
                         6) &nbsp; MOBILE NUMBER<br /> (IF ANY)<br /><br />

                                    </div>

<div className="col-md-8">
                                    <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {/* {candidate_mobile_no.map(document => (
                                            <input defaultValue={this.state.mobile_no} key={document.key} type="text" style={{ width: '45px' }}></input>

                                        ))} */}
                                               
                                                <input onChange={this.setPermanentMobile} defaultValue={this.state.mobile_no} key={document.key} type="text" style={{ width: '100%' }}></input>

                                              

                                      


                                    </div>


                                        </div></div>
                                </div>


                                <div className="col-md-12 mt-3"  >
                                    <div className="row">
                                    <div className=" col-md-4 float-left font-weight-bold" >
                                        
                            7) &nbsp; E-MAIL ID<br /> (IF ANY)<br /><br />

                                    </div>

                                        <div className="col-md-8">

                                    {/* <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_email_list.map(document => (

                                            <input defaultValue={this.state.c_email} key={document.key} type="text" style={{ width: '40px' }}></input>
                                        ))}
                                    </div><br></br>
                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_email_list.map(document => (
                                            <input defaultValue={this.state.c_email} key={document.key} type="text" style={{ width: '40px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}<br />


                                    </div><br></br>

                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_email_list.map(document => (
                                            <input defaultValue={this.state.c_email} key={document.key} type="text" style={{ width: '40px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}


                                    </div> */}
                                            <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                                     <input onChange={this.setEmail} defaultValue={this.state.c_email} key={document.key} type="text" style={{ width: '100%' }}></input>
                                                   
                                         


                                            </div>

                               </div>
                               </div>
                                </div><br/>
<div className="col-md-12 mt-3" >
    <div className="row">
<div className="title font-weight-bold col-md-8">
                            8) &nbsp; WHETHER EARLIER A MEMBER OF THE EMPLOYEES PROVIDENT FUND SCHEME, 1952?
                            
                             </div>
                                        <div className="col-md-4" >
                                           <div className="table-responsive">
                                                <table  className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                                    <tr>
                                                        <th className="text-uppercase text-center">YES</th>
                                                        <th className="text-uppercase text-center">	No</th>
                                                        
                                                    </tr>
                                                    </table>
                                           </div>
                                        </div>


                           <div className="title font-weight-bold col-md-8 mt-3" >
                                            9) &nbsp;  WHETHER EARLIER A MEMBER OF THE EMBPLOYEES PENSION SCHEME, 1995?
                             </div>

                           
                                            <div className="col-md-4 mt-3" >
                                                <div className="table-responsive">
                                                    <table className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                                        <tr>
                                                            <th className="text-uppercase text-center">YES</th>
                                                            <th className="text-uppercase text-center">	No</th>

                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
  <div className=" title col-md-12 font-weight-bold text-center" style={{marginTop:'30px'}}>
                                
                                        <u>IF RESPONSE TO ANY OR BOTH OF (8) & (9) ABOVE IS YES, THEN MANDATORILY FILL UP
                                    THE PREVIOUS EMPLOYMENT DETAILS AT (10,11 & 12) :</u>
                      

                            </div>
                        
                                


                                    </div>
                                </div>   </div>

 

                            {/* col-md-12 close */} </div>


                        {/* row closs */} </div><br /><br />


                    {/* border close  */} </div><br/>



{/* 2nd page */}
             <div className="border">
                    < div  className="row " style={{ marginTop: '2%', marginLeft: 'none', marginRight: 'none' }}>
        <div className="col-md-12">
            <div className="border border-dark" style={{marginLeft:'30px', marginRight:'30px'}}>
                                <div style={{ backgroundColor: 'black', color: 'white', paddingLeft: '15px' }}> &nbsp; &nbsp; A.  PREVIOUS EMPLOYMENT DETAILS
</div>

<div className="title font-weight-bold" style={{marginLeft:'15px', marginTop:'20px'}}>
                                    10) &nbsp;THE DETAILS OF THE UNIVERSAL ACCOUNT NUMBER (UAN) OR PREVIOUS PF MEMBER ID:
                                     
                           
                        </div>
                                <br />  <div className="col-md-12"  >
                                <div className=" float-left font-weight-bold" style={{ marginLeft: '30px' }} >
                                        UAN
                                   </div>


                                <div className="text-center">
                                <div  style={{ display: 'inline-flex' }}>
                                    {/* {candidate_uan_no.map(document => (

                                        <input key={document.key} type="text" style={{ width: '40px' }}></input>
                                    ))} */}
                                            <input  onChange={this.setuan} defaultValue={otherdetails.uan} key={document.key} type="text" style={{ width: '100%' }}></input>

                                    </div>   </div><br></br>

                            <div className="title text-center">OR</div><br/><br/>

                                <div className="title font-weight-bold" style={{ marginLeft: '15px', marginTop: '20px' }}>
                                    PREVIOUS PF MEMBER ID

                                           </div>

                                {/* <div className="text-center">
                                    <div style={{ display: 'inline-flex' }}>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '23px' }}>
                                            <div className='title font-weight-bold border border-dark' style={{ width: '150px', height: '27px' }}>REGION CODE	</div>
                                            <div className='title font-weight-bold border border-dark' style={{ width: '150px', height: '27px' }}>	OFFICE CODE</div>
                                            <div className='title font-weight-bold border border-dark' style={{ width: '150px', height: '27px' }}>	ESTABLISHMENT ID</div>
                                            <div className='title font-weight-bold border border-dark' style={{ width: '150px', height: '27px' }}>	EXTENSION</div>
                                            <div className=' title font-weight-bold  border border-dark' style={{ width: '150px', height: '27px' }}>	ACCOUNT NUMBER</div>
                                        </div>
                                       </div>
                                    <div style={{ display: 'inline-flex', marginLeft: '23px' }}>
                                       
                                        <input  type="text" style={{ width: '150px' }}></input>
                                        <input type="text" style={{ width: '150px' }}></input>
                                        <input type="text" style={{ width: '150px' }}></input>
                                        <input type="text" style={{ width: '150px' }}></input>
                                        <input type="text" style={{ width: '150px' }}></input>
                                    </div>
                                    
                                       </div> */}
                                    <div className="table-responsive">
                                      
                                        <table width="50%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                            <tr>
                                                <th  className="text-uppercase text-center">REGION CODE</th>
                                                <th  className="text-uppercase text-center">	OFFICE CODE</th>
                                                <th  className="text-uppercase text-center">Date of Birth</th>
                                                <th  className="text-uppercase text-center">ESTABLISHMENT ID</th>
                                                <th  className="text-uppercase text-center small font-weight-bold">EXTENSION</th>
                                                <th  className="text-uppercase text-center small font-weight-bold">ACCOUNT NUMBER</th>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold"><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                <td className="text-center"><input type="date" name="" className="px-0 py-0 text-center border-0 form-control" /></td>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control"/></td>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control"  /></td>
                                            </tr>
                                           

                                           </table>
                                      </div>
</div><br/><br/>

                                <div className="col-md-12" >
                               < div className="row">
                                    <div className=" col-md-6 float-left font-weight-bold" >
                                        
                           11) DATE OF EXIT FOR PREVIOUS MEMBER ID (DD/MM/YYYY)
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>

{/* 
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>

                                        <br></br> */}</div>

                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {/* {member_id_date.map(document => (
                                                <input key={document.key} type="text" style={{ width: '27px' }}></input>

                                            ))} */}
                                                <input type="date" key={document.key} type="text"></input>

                                        </div><br />


                                    </div><br />


                                </div>
                                </div><br/>
                                <div className="col-md-12"  >

                                    <div className=" float-left " >
                                        
                           12)  (A) IF SCHEME CERTIFICATE ISSUED FOR PREVIOUS EMPLOYMENT, THEN SCHEME CERTIFICATE NUMBER:______________________
                           <br/>
                           
                                    </div>
                                   <br />


                                </div>
                                <div className="col-md-12"  >

                                    <div className=" float-left " style={{marginLeft:'22px'}}>

                                        &nbsp; (B) IF PENSION PAYMENT ORDER (PPO) ISSUED FOR PREVIOUS EMPLOYMENT, THEN PPO NUMBER:______________________
                           <br />

                                    </div><br/>
                                   


                                </div><br/><br/>
                                <div style={{ backgroundColor: 'black', color: 'white',paddingLeft:'15px' }}> &nbsp; &nbsp; B.  OTHER DETAILS
                                                                               </div>



                                <div className="col-md-12" style={{marginTop:'20px'}} >
                         <div className="row">
                                    <div className=" col-md-4  font-weight-bold" >
                                        
                        
                            13) &nbsp;INTERNATIONAL WORKER<br />(PLEASE TICK)
                                    </div>
                                
                                   
                                        {/* <div className="text-center font-weight-bold" style={{ display: 'inline-flex' }}>


                                            <div className='border border-dark' style={{ width: '150px', height: '27px' }}>YES</div>
                                            <div className='border border-dark' style={{ width: '150px', height: '27px' }}>NO</div>
                                            

                                        </div><br></br>
                                        <div className="text-center" style={{ display: 'inline-flex',  }}>
                                            <input type="text" style={{ width: '150px' }}></input>
                                            <input type="text" style={{ width: '150px' }}></input>

                                        <br />


                                    </div><br /> */}
                                        <div className="col-md-8">
                                            <div className="table-responsive">

                                                <table  className="table mb-0 border-dark table-bordered" cellSpacing="0" style={{width:'30%'}}>
                                                    <tr>
                                                        <th className="text-uppercase text-center">YES</th>
                                                        <th className="text-uppercase text-center">	NO</th>
                                                       
                                                    </tr>
                                                    <tr>
                                                       
                                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                    </tr>


                                                </table>
                                            </div>
                                    </div><br/>

                                    </div>    </div><br/>
                                
                                
                                <div className="col-md-12" >
                                    <div className=" float-left font-weight-bold" style={{ marginLeft: '30px' }} >
                                        IF THE REPLY TO (13) ABOVE IS YES, THEN ENTER THE DETAILS IN 13( A ), 13( B ) & 13( C ):
                                   </div>
                                   
                                 <br></br>
                                </div>


                                <div className="col-md-12" >

                                    <div className=" float-left " style={{ marginLeft: '30px' }}  >
                                        
                                        13( A ) COUNTRY OF ORIGIN (Please Tick)<br /><br />
                                    </div>
                                    {/* <div style={{ marginLeft: '30px' }}>
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>INDIA</div>
                                            <div className='border border-dark' style={{ width: '300px', height: '50px' }}>OTHER THAN INDIA (IF YES, PLEASE MENTION NAME OF THE COUNTRY)</div>
                                           

                                        </div><br></br>
                                        <div className="text-center" style={{marginLeft:'44px'}} >
                                          
                                            <input  type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '300px' }}></input>

                                      

                                        </div><br />                                     
                                    </div><br /> */}
                                    <div className="col-md-12">
                                        <div className="table-responsive">

                                            <table className="table mb-0 border-dark table-bordered" cellSpacing="0" >
                                                <tr>
                                                    <th className="text-uppercase text-center">INDIA</th>
                                                    <th className="text-uppercase text-center">OTHER THAN INDIA (IF YES, PLEASE MENTION NAME OF THE COUNTRY)</th>

                                                </tr>
                                                <tr>

                                                    <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                    <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                </tr>


                                            </table>
                                        </div>
                                    </div><br />


                                </div><br/>


                                <div className="col-md-12"  >
                                 
                                    <div className=" float-left " style={{ marginLeft: '30px' }}  >

                                        13( B ) PASSPORT NUMBER
                                    </div>
                                 
                                    
                                        <div className="text-center" style={{ marginLeft: '30px' }}>
                                        <input type="text" ></input>


                                          </div><br />
                                </div>

<br/>


                                <div className="col-md-12">
                                    <div className="row">
                                    <div className=" col-md-3 float-left "   >
                                       
                                        13( C ) PASSPORT VALID FROM<br /><br />

                                    </div>

                                    <div className="col-md-3">
                                        {/* <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                        </div> */}
                                       
                                            {/* {candidate_dob_list.map(document => (
                                                <input key={document.key} type="text" style={{ width: '27px' }}></input>
                                               
                                            ))}
                                             */}
                                                <input   key={document.key} type="text" ></input>

                                             
                                           
                                            
                                         
                                      </div>

                                      <div className="col-md-3 font-weight-bold">
                                               TO
                                      </div>
                                        <div className="col-md- 3">
                                            {/* <div className="text-center" style={{ display: 'inline-flex', }}>
                                                {/* <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div> 
                                            </div><br></br> */}
                                           
                                                {/* {candidate_dob_list.map(document => (
                                                    <input key={document.key} type="text" style={{ width: '27px' }}></input>

                                                ))} */}
                                            <input key={document.key} type="text" ></input>
                                                



                                         
                                        </div>

                                    </div></div><br/>

                                <div className="col-md-12"  >
                                    <div className="row">

                                    <div className=" col-md-2 float-left font-weight-bold" >
                                        
                           14) EDUCATION <br /> QUALIFICATION <br />(Please Tick)
                    </div>
                                    {/* <div className="col-md-9" >
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex',  }}>


                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>ILLITERATE</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>NON MATRIC</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>MATRIC</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>SENIOR SECONDARY </div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>GRADUATE</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>POST GRADUATE </div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>DOCTOR</div>
                                            <div className='border border-dark' style={{ width: '125px', height: '50px' }}>TECHNICAL PROFFESSIONAL</div>

                                        </div>
                                        <div className="text-center" style={{ display: 'inline-flex' }}>
                                        
                                            <input  type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '125px' }}></input>

                                            

                                        </div><br />


                                    </div><br /> */}
                                     <div className="col-md-10" >
                                        <div className="table-responsive">

                                            <table width="50%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                                <tbody>
                                                <tr>
                                                    <th  className="text-uppercase text-center">ILLITERATE</th>
                                                    <th className="text-uppercase text-center">	NON MATRIC</th>
                                                    <th className="text-uppercase text-center">MATRIC</th>
                                                    <th  className="text-uppercase text-center">SENIOR SECONDARY</th>
                                                    <th  className="text-uppercase text-center small font-weight-bold">GRADUATE</th>
                                                    <th  className="text-uppercase text-center small font-weight-bold">POST GRADUATE</th>
                                                    <th  className="text-uppercase text-center small font-weight-bold">DOCTOR</th>
                                                    <th className="text-uppercase text-center small font-weight-bold">TECHNICAL PROFFESSIONAL</th>
                                                </tr>
                                                <tr>
                                                            <td className="text-uppercase font-weight-bold"> 
                                                                <input type="checkbox" name="" className="px-0 py-0 border-0 form-control"  /></td>
                                                            <td>
                                                                <input type="checkbox" name="" className="px-0 py-0 border-0 form-control"/></td>
                                                            <td className="text-center">
                                                                <input type="checkbox" name="" className="px-0 py-0 text-center border-0 form-control" defaultChecked={this.state.education_data['10'].level == 10} /></td>
                                                            <td><input type="checkbox" name="" className="px-0 py-0 border-0 form-control" defaultChecked={this.state.education_data['12'].level==12}/></td>
                                                            <td><input type="checkbox" name="" className="px-0 py-0 border-0 form-control" defaultChecked={this.state.education_data['graduate'].level === graduate } /></td>
                                                            <td><input type="checkbox" name="" className="px-0 py-0 border-0 form-control" defaultChecked={this.state.education_data['post_graduate'].edulevel === post_graduate}/></td>
                                                            <td><input type="checkbox" name="" className="px-0 py-0 border-0 form-control" defaultChecked={this.state.education_data['other'].level === 'other'}/></td>
                                                            <td><input type="checkbox" name="" className="px-0 py-0 border-0 form-control" defaultChecked={this.state.education_data['other'].level === 'other'}/></td> 
                                                    
                                                </tr>

                                                    </tbody>
                                            </table>
                                        </div>
                                        </div>

                                    </div>  </div><br/>


                                <div className="col-md-12"  >
                                <div className="row">
                                    <div className=" col-md-4 float-left font-weight-bold" >
                                        
                           15)MARITAL STATUS <br />(Please Tick)
                    </div>
                                   
                                        {/* <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>MARRIED</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>UNMARRIED</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>MATRIC</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>WIDOW /WIDOWER </div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>DIVORCEE</div>
                                           

                                        </div><br></br> */}
                                            <div className="col-md-6">
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
{/* 
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input> */}
                                           
                                                <input defaultValue={this.state.marital_status} type="text" ></input>


                                        </div>


                                    </div>


                                    </div></div><br/>


                                <div className="col-md-12"  >
<div className="row">
                                    <div className=" col-md-4 float-left font-weight-bold" >
                                        
                           16)SPECIALLY ABLED <br />(Please Tick)
                    </div>
                                    <div  className="col-md-6">
                                            <div className="table-responsive">

                                                <table className="table mb-0 border-dark table-bordered" cellSpacing="0"  style={{width:'auto'}}>
                                                    <tr>
                                                        <th className="text-uppercase text-center">YES</th>
                                                        <th className="text-uppercase text-center">No</th>

                                                    </tr>
                                                    <tr>

                                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                    </tr>



                                                </table>
                                            </div>


                                    </div>

                                </div>
</div><br/>
                               


                                <div className="col-md-12"  >
                                    <div className="row">

                                    <div className=" col-md-4 float-left font-weight-bold" >
                                        
                           IF YES, TICK THE CATEGORY <br />(Please Tick)
                    </div>
                                    <div className="col-md-8 mb-3">
                                       
                                        {/* <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            <div className='border border-dark' style={{ width: '125px', height: '50px' }}>LOCOMOTIVE</div>
                                            <div className='border border-dark' style={{ width: '125px', height: '50px' }}>VISUAL</div>
                                            <div className='border border-dark' style={{ width: '125px', height: '50px' }}>HEARING </div>
                                        </div>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>

                                            <input type="text" style={{ width: '125px' }}></input>
                                            <input type="text" style={{ width: '125px' }}></input>
                                            <input type="text" style={{ width: '125px' }}></input>




                                        </div> */}
                                            <div className="table-responsive">

                                                <table className="table mb-0 border-dark table-bordered" cellSpacing="0" style={{ width: 'auto' }}>
                                                    <tr>
                                                        <th className="text-uppercase text-center">LOCOMOTIVE</th>
                                                        <th className="text-uppercase text-center">VISUAL</th>
                                                        <th className="text-uppercase text-center">HEARING </th>

                                                    </tr>
                                                    <tr>
                                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                    </tr>


                                                </table>
                                            </div>


                                        </div>
                                     
                                </div>

                            </div>
                                
                            </div>
                           
                        </div>
                      
                        </div>
                        <br />
                   
</div>
<br/>
<div className="border">
                    < div className="row " style={{ marginTop: '2%', marginLeft: 'none', marginRight: 'none' }}>
                        <div className="col-md-12">
                            <div className="border border-dark" style={{ marginLeft: '30px', marginRight: '30px' }}>


                                <div className="col-md-12"  >
                                     <div className="row">
                                        <div className=" col-md-2 mt-3 font-weight-bold" >
                                        
                          17 ) KYC DETAIL
                                    </div>
                                    <div className="col-md-10 mt-3">
                                       <div className="table-responsive">
                                        <table  className="table table-bordered"  >
                                            <thead style={{border:'1px solid'}}>
                                                <tr className="font-weight-bold">
                                                    <th>KYC DOCUMENT TYPE</th>
                                                    <th>NAME AS ON KYC DOCUMENT	</th>
                                                    <th>NUMBER</th>
                                                    <th>REMARKS, IF ANY</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>BANK ACCOUNT 1*</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a'}}/></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a'}} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    {/* <td><input type="text" name="" className="px-0 py-0 border-0 form-control" style={{ backgroundColor: ' #ffffff0a' }} /></td> */}

                                                </tr>
                                                <tr>
                                                    <td>NPR / AADHAAR</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>PERMANENT ACCOUNT NUMBER (PAN)</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>PASSPORT </td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>DRIVING LICENCE</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>ELECTION CARD</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>RATION CARD</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>ESIC CARD</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="4">
                                                        <b>*  Mandatory Field  (NOTE:  BANK  ACCOUNT 	NUMBER 	(ALONG 	WITH  IFSC  CODE)  IS  MANDATORY.</b>	YOU
                                                        ARE  HOWEVER 	ADVISED 	TO  PROVIDE 	ALL  KYC  DOCUMENTS 	AVAILABLE 	WITH  YOU  IN  ADDITION 	TO
                                                        MANDATORY 	KYCS  TO  AVAIL  BETTER 	SERVICES. <b>	SELF-ATTESTED 	PHOTOCOPIES 	OF  THE  DOCUMENTS
                                                        MUST  BE  ATTACHED 	WITH  THIS  FORM.</b>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
</div>

                                        </div>


                                    </div>   </div><br />

                                <div style={{ backgroundColor: 'black', color: 'white', paddingLeft: '15px' }}> &nbsp; &nbsp;C.  UNDERTAKING :
                                                                               </div>
     <div className="col-md-12">   
     <div className="row" style={{marginLeft:'none', marginRight:'none'}}>                                                                     
<div className="title mt-3"  style={{overflowX:'hidden'}} >
    <ul style={{listStyleType:'none', width:'100%'}}>
        <li>
              <b>A.</b> &nbsp;  &nbsp;     I CERTIFY THAT ALL THE INFORMATION GIVEN ABOVE IS TRUE  TO  THE BEST	 OF MY KNOWLEDGE AND  BELIEF
                                             
        </li>
 <li>
           <b>B.</b> &nbsp;  &nbsp;    IN CASE, EARLIER 	A  MEMBER OF EPF SCHEME, 1952 	AND/OR EPS, 1995,


        </li>
             <li>
            <b>(I)</b> &nbsp;  &nbsp;    I HAVE ENSURED THE CORRECTNESS OF MY UAN/ PREVIOUS PF MEMBER ID
       </li>



        <li>
    <b>(II)</b> &nbsp;  &nbsp;   THIS MA Y ALSO BE 	TREATED  AS MY  REQUEST FOR  TRANSFER OF FUNDS AND SERVICE DETAILS IF  APPLICABLE FROM THE PREVIOUS ACCOUNT AS DECLARED ABOVE  TO  THE PRESENT	 P .F .  ACCOUNT.
(THE  TRANSFER WOULD BE POSSIBLE ONLY  IF  THE IDENTIFIED KYC DETAILS  APPROVED BY	 PREVIOUS  EMPLOYER HAS BEEN VERIFIED BY PRESENT EMPLOYER USING HIS DIGITAL  SIGNATURE CERTIFICATE).        </li>
 <li>
 <b>(III)</b> &nbsp;  &nbsp;   I  AM  AWARE  THAT  I CAN SUBMIT	 MY  NOMINATION FORM 	THROUGH UAN BASED MEMBER POR
  </li>
    </ul>

    <div className="title font-weight-bold float-left ml-3">
        DATE
    </div>
    <br/><br/>
    <div className="title font-weight-bold float-left ml-3">
   PLACE
    </div>
      <div className="title font-weight-bold float-right ml-3">
     SIGNATURE OF MEMBER
    </div>
                                        </div>  </div></div> <br/>


 <div  className="text-center" style={{ backgroundColor: 'black', color: 'white' ,fontSize:'large'}}>DECLARATION BY PRESENT EMPLOYER

 </div><br/>
 <div className="col-md-12">
                                    <div className="row" style={{ marginLeft: 'none', marginRight: 'none' }}>
                                        <div className="title" style={{ overflowX: 'auto' }}>
                     
                                    <ul  classname="text-justify" style={{ listStyleType:'upper-alpha' , width:'100%'}}>
                                        <li>THE MEMBER Mr./Ms./Mrs .............................. HAS JOINED ON ........................ AND HAS BEEN
                                        ALLOTTED PF MEMBER ID  ...................................................

                                        </li>
                                        <li>
                                            IN CASE  THE  PERSON 	WAS  EARLIER 	NOT A MEMBER 	OF  EPF  SCHEME, 	1952  AND  EPS,  1995:
                                        </li>
                                        <ul >
                                            <li>
                                                (POST ALLOTMENT OF UAN) THE UNALLOWTTED FR THE MEMBER IS.................
                                            </li>
                                            <li>
                                                PLEASE TICK THE APPROPRIATE OPTION:<br/>
                                                THE KYC DETAILS OF THE ABOVE MEMBER IN THE UANDATABASE
                                            </li>
                                            <ul style={{ listStyleType:'square'}}>
                                                <li>
                                                    HAVE NOT BEEN UPLOADED
                                                </li>
                                                <li>
                                                    HAVE  BEEN UPLOADED BUT NOT APPROVED
                                                </li>
                                                <li>
                                                    HAVE NOT BEEN UPLOADED AND APPROVED WITH DSC
                                                </li>
                                               

                                            </ul>
                                        </ul>
                                        <li>
                                            IN CASE  THE  PERSON WAS  EARLIER  MEMBER OF EPF SCHEME, 	1952  AND  EPS,  1995:
                                        </li>
                                        <ul>
                                            <li>
                                                THE ABOVE MEMBER ID OF THE MEMBER AS MENTIONED IN (A) ABOVE HAS BEEN TAGGED WITH
                                                HIS/HER UANPREVIOUS MEMBER ID AS DECLRAED BY MEMBER
                                            </li>
                                            <li className="font-weight-bold">
                                                PLEASE TICK THE APPROPRIATE OPTION:
                                               
                                            </li>
                                            <ul  style={{ listStyleType: 'square' }}>
                                                <li>
                                                    THE KYC DETAILS OF THE ABOVE MEMBER IN THE UANDATABASE HAVE BEEN APPROVED WITH  DIGITAL SIGNATURE CERTIFICATE AND TRANSFER
                                                    REQUEST HAS BEEN CENTRATED ON PORTAL
                                                </li>
                                                <li>
                                                 AS THE DSC OF ESTABLISHMENT ARE NOT REGISTERED WITH EPFO, THE MEMBER HAS BEEN INFORMED TO THE PHYSICAL CLAIM (FORM-13) FOR
                                                  TRANSFER OF FUNDS FROM HIS ESTABLISHMENET
                                                </li>
                                                


                                            </ul>
                                              </ul><br/>

                                        <div className="col-md-12">
                                            <div className="title font-weight-bold float-left "> DATE</div>

                                            <div className="title font-weight-bold float-right"> SIGNATURE OF MEMBER</div>
                                        </div>
                                              </ul>


                                   
                                        </div>   </div>  </div><br/>
                          
                      </div>
                     </div>
                   </div><br/><br/>
                    </ div><br/>

                {/* /Page Header */}
              
                <div className="row" ref={ref}>
                    <div className="col-sm-12">
                        <div className="canvas_div_pdf">
                            <form className="p-3 border bg-white border-dark">
                                <div className="row no-gutters mb-4 d-flex justify-content-end flex-column align-content-end input-line">
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0">Employee Code:</label>
                                            </div>
                                            <input type="text" name="client-name" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0">Mobile No.:</label>
                                            </div>
                                            <input type="text" name="doj" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0">Employee Code:</label>
                                                </div>
                                                <input type="text" name="employee-code" className="px-0 ml-2 py-1 form-control" />
                                            </div>
                                        </div> */}
                                </div>
                                <div className="row no-gutters d-flex mb-4">
                                    <div className="col-sm-2">
                                        {/* <img src="logo.png" width="100" alt="logo" />  */}
                                        <img src={epfs} width="100" alt="logo" />
                                    </div>
                                    <div className="col-sm-8 my-auto">
                                        <h2 className="text-center">THE EMPLOYEES PROVIDENT FUND ORGANISATION</h2>
                                        <h3 className="text-center">NOMINATION AND DECLARATION FORM <br></br>
FOR UNEXEPMTED / EXEMPTED ESTABLISHMENTS</h3>
                                        <h4 className="text-center font-weight-normal">Declaration Nomination Form under the Employee's Provident Fund and Employee's Pension Scheme
                                        (Paragraph 33 and 61 of the Employee's Provident Fund Scheme, 1952 & Paragraph 18 of the
Employee's Pension Scheme,</h4>

                                    </div>

                                    <div className="col-sm-2 my-auto">
                                        <div className="float-right small p-1 text-center">
                                            <p><b>Form No. 2 (Revised)</b></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row  p-2 intro-fst">
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <label htmlFor="" className="mb-0 text-uppercase">* Name in Full (In block letters)</label>
                                            <input type="text" name="name" defaultValue={this.state.name} className="px-0 py-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <label htmlFor="" className="mb-0 text-uppercase">* Account No.: GJ/AHD/56271</label>
                                            <input defaultValue={this.state.account_number} type="text" name="father-name" className="px-0 py-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Father's/Husband's Name <br></br>(in case of married woman) :</label>
                                            </div>
                                            <input defaultValue={this.state.father_name} type="text" name="designation" className="px-0 mx-2 py-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Permanent Address:</label>
                                            </div>
                                            <input defaultValue={this.state.job_location} type="text" name="location" className="px-0 mx-2 py-1 form-control" />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Date of Birth</label>
                                            </div>
                                            <input defaultValue={this.state.dob} type="date" name="designation" className="px-0 mx-2 py-1 form-control" onChange={this.setDob} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Temporary Address:</label>
                                            </div>
                                            <input defaultValue={this.state.job_location} type="text" name="location" className="px-0 mx-2 py-1 form-control" />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group input-group align-items-end">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase w-20">Sex</label>
                                            </div>
                                            <input defaultValue={this.state.gender} type="text" name="designation" className="px-0 mx-2 py-1 form-control" />
                                                     Male &nbsp; <input type="checkbox" value="gender"  checked={this.state.gender === "male"} ></input> &nbsp;
                                                     Female &nbsp;<input type="checkbox" value="gender" checked={this.state.gender === "female"}></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Marital Status:</label>
                                            </div>
                                            <input defaultValue={this.state.marital_status} type="text" name="location" className="px-0 mx-2 py-1 form-control" />
                                        </div>
                                    </div>

                                </div>





                                <div className="table-responsive mt-4 center-input">
                                    <h2 className="text-center">PART - A (EPF)</h2>
                                    <h4 className="text-center font-weight-normal">I hereby nominate the person(s)/cancel the nomination made by me previously and nominated the person(s),
                                    mentioned below to receive the amount standing to my credit in the Employees' Provident Fund, in the event of my death.
</h4>
                                    <table width="100%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                        {/* <tr>
                                                <td colSpan="5"><h5 className="text-uppercase font-weight-bold">Work Experience</h5></td>
                                            </tr> */}
                                        <tr>
                                            <th width="30%" className="text-uppercase font-weight-bold text-center">Name &amp; Address of Nominee</th>
                                            <th width="10%" className="text-uppercase font-weight-bold text-center">Nominee's Relationship with the member</th>
                                            <th width="10%" className="text-uppercase font-weight-bold text-center">Date of Birth</th>
                                            <th width="20%" className="text-uppercase font-weight-bold text-center">Total Amount or Share of accumulation in Provident Fund to be Paid to Each Nominee</th>
                                            <th width="30%" className="text-uppercase font-weight-bold text-center">If the Nominee is a minor, Name
                                            Relationship and address of the guardian
                                            who may receive the amount during
the minority of nominee</th>
                                        </tr>
                                        <tr>
                                            <td><input type="text" name="" placeholder="1" className="px-0 py-0 border-0 form-control" defaultValue={work_experience.organization} /></td>
                                            <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"

                                                placeholder="2" onFocus="(this.type='date')" defaultValue={work_experience.start_date} /></td>
                                            <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"

                                                placeholder="3" onFocus="(this.type='date')" defaultValue={work_experience.end_date} /></td>
                                            <td><input placeholder="4" className="px-0 py-0 border-0 form-control" defaultValue={work_experience.designation}></input></td>
                                            <td><input placeholder="5" className="px-0 py-0 border-0 form-control" defaultValue={work_experience.reason_for_leaving}></input></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={work_experience1.organization} /></td>
                                            <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                placeholder="" onFocus="(this.type='date')" defaultValue={work_experience1.start_date} /></td>
                                            <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                placeholder="" onFocus="(this.type='date')" defaultValue={work_experience1.end_date} /></td>
                                            <td><input className="px-0 py-0 border-0 form-control" defaultValue={work_experience1.designation}></input></td>
                                            <td><input className="px-0 py-0 border-0 form-control" defaultValue={work_experience1.reason_for_leaving}></input></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={work_experience2.organization} /></td>
                                            <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                placeholder="" onFocus="(this.type='date')" defaultValue={work_experience2.start_date} /></td>
                                            <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                placeholder="" onFocus="(this.type='date')" defaultValue={work_experience2.end_date} /></td>
                                            <td><input className="px-0 py-0 border-0 form-control" defaultValue={work_experience2.designation}></input></td>
                                            <td><input className="px-0 py-0 border-0 form-control" defaultValue={work_experience2.reason_for_leaving}></input></td>
                                        </tr>
                                    </table>

                                    <ol className="p-0 my-4">
                                        <li>*Certified that i have no family as defined in para 2(g) of the Employee's Fund Scheme, 1952 and should I acquire a family hereafther the above nomination should be deemed as cancelled.</li>
                                        <li>*Certified that my father/mother is /are dependent upon me.</li>
                                        <li className="mt-3"><label>Strikeout whichever is not applicable.</label> <lable className="d-block text-right">Signature or Thumb impression of the subscriber</lable></li>
                                    </ol>

                                </div>
                                <hr style={{ height: '2px', background: '#333' }}></hr>

                                <div className="table-responsive my-4 pb-4">
                                    <h2 className="text-uppercase font-weight-500 mt-2 mb-1 text-center">FOR OFFICE USE ONLY</h2>
                                    <table width="100%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                        <tr>
                                            <td className="border-0 w-50">
                                                <table className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                                    <tr>
                                                        <td>Dt. of Joining E.P.F. </td>
                                                        <td>/ / 20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Past Service ...................... years</td>
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date of Joining EPS</td>
                                                        <td>/ / 20</td>
                                                    </tr>
                                                </table>
                                            </td>

                                            <td className="border-0 w-50">
                                                <table className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                                    <tr>
                                                        <td colSpan="3" className="text-center">ENTRIES VERIFIED</td>

                                                    </tr>
                                                    <tr>
                                                        <td colSpan="3">&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D.A.</td>
                                                        <td>S.S. </td>
                                                        <td>A.A.O.</td>
                                                    </tr>
                                                </table>
                                            </td>



                                        </tr>

                                    </table>


                                </div>
<br/>
                                <div className="content container-fluid dividedbox">

                                    <div className="table-responsive mt-5 center-input">
                                        <h2 className="text-center">PART-B (EPS) PARA 18</h2>
                                        <h4 className="font-weight-normal">I hereby furnish below particulars of the members of my family who would be eligible to receive widow/widower/children
                                        Pension in the event of my death.
</h4>
                                        <table width="100%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                            {/* <tr>
                                                <td colSpan="5"><h5 className="text-uppercase font-weight-bold">Work Experience</h5></td>
                                            </tr> */}
                                            <tr>
                                                <th width="5%" className="text-uppercase font-weight-bold text-center">Sl.
No</th>
                                                <th width="20%" className="text-uppercase font-weight-bold text-center">Name of the Family Member member
                                                </th>
                                                <th width="20%" className="text-uppercase font-weight-bold text-center">Address</th>
                                                <th width="10%" className="text-uppercase font-weight-bold text-center">Date of
Birth</th>
                                                <th width="20%" className="text-uppercase font-weight-bold text-center">Relationship with member</th>
                                            </tr>
                                            <tr>
                                                <td><input type="text" name="" placeholder="1" className="px-0 py-0 border-0 form-control" defaultValue={work_experience.organization} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"

                                                    placeholder="2" onFocus="(this.type='date')" defaultValue={work_experience.start_date} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"

                                                    placeholder="3" onFocus="(this.type='date')" defaultValue={work_experience.end_date} /></td>
                                                <td><input placeholder="4" className="px-0 py-0 border-0 form-control" defaultValue={work_experience.designation}></input></td>
                                                <td><input placeholder="5" className="px-0 py-0 border-0 form-control" defaultValue={work_experience.reason_for_leaving}></input></td>
                                            </tr>
                                            <tr>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={work_experience1.organization} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                    placeholder="" onFocus="(this.type='date')" defaultValue={work_experience1.start_date} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                    placeholder="" onFocus="(this.type='date')" defaultValue={work_experience1.end_date} /></td>
                                                <td><input className="px-0 py-0 border-0 form-control" defaultValue={work_experience1.designation}></input></td>
                                                <td><input className="px-0 py-0 border-0 form-control" defaultValue={work_experience1.reason_for_leaving}></input></td>
                                            </tr>
                                            <tr>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={work_experience2.organization} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                    placeholder="" onFocus="(this.type='date')" defaultValue={work_experience2.start_date} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                    placeholder="" onFocus="(this.type='date')" defaultValue={work_experience2.end_date} /></td>
                                                <td><input className="px-0 py-0 border-0 form-control" defaultValue={work_experience2.designation}></input></td>
                                                <td><input className="px-0 py-0 border-0 form-control" defaultValue={work_experience2.reason_for_leaving}></input></td>
                                            </tr>
                                        </table>

                                        <ol className="p-0 my-4">
                                            <li>Certified that I have no family, as defined in para 2 (vii) of Employee's Pension Scheme, 1995 and should i acquire a family hereafter i shall furnish particulars thereon in the above form.
                                                </li><br></br>
                                            <li>I hereby nominate the following person for receiving the monthly pension (admissible under para 16(2) (g)(i) and (ii) in the event of my death without leaving any eligible family member for receiving pension.</li>
                                        </ol>

                                        <table width="100%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                            {/* <tr>
                                                <td colSpan="5"><h5 className="text-uppercase font-weight-bold">Work Experience</h5></td>
                                            </tr> */}
                                            <tr>

                                                <th width="60%" className="text-uppercase font-weight-bold text-center">Name &amp; Address of the Nominee
                                                Relationship with member
                                                </th>
                                                <th width="20%" className="text-uppercase font-weight-bold text-center">Date of Birth</th>
                                                <th width="20%" className="text-uppercase font-weight-bold text-center">Relationship with member</th>

                                            </tr>
                                            <tr>
                                                <td><input type="text" name="" placeholder="1" className="px-0 py-0 border-0 form-control" defaultValue={work_experience.organization} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"

                                                    placeholder="2" onFocus="(this.type='date')" defaultValue={work_experience.start_date} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"

                                                    placeholder="3" onFocus="(this.type='date')" defaultValue={work_experience.end_date} /></td>

                                            </tr>


                                        </table>
                                        <table width="100%" className="table mb-0 " cellSpacing="0">
                                            <tr>
                                                <td>Date</td>
                                            </tr>
                                            <tr>
                                                <td>* Strike out whichever is not allicable</td>
                                                <td align="right">Signature or Thumb impression of the subscriber</td>
                                            </tr>
                                        </table>

                                    </div>

                                    <div className="row no-gutters d-flex mb-4">
                                        <div className="col-md-12 certified">
                                            <h2 className="text-center">CERTIFIED BY EMPLOYER
</h2>
                                            <h4 className="text-center">Certified that the above declaration and nomination has been signed / thumb impressed before me by </h4>
                                            <h4 className="font-weight-normal">Shri./Smt./Kum
                                            <input type="text"></input><br></br>
employed in my establishment after he/she has read the entries/entries have been read over to him/her by me and got confirmed
by him/her.</h4>
                                        </div>



                                        <div className="col-md-4 date-filed">
                                            Adhaan Solution Pvt. Ltd.<br></br>
                                            807, 8th Floor, Dev Aurum,<br></br>
                                            Nr. Anand Nagar Cross Road,<br></br>
                                            100ft Road,Prahladnagar,<br></br>
                                            Ahmedabad-380015 <br></br>
                                            Date <input type="text"></input>
                                        </div>

                                        <div className="col-md-8">
                                            <ul className="list-unstyled certifi-list">
                                                <li>Signature of the employer or other authorised Officers of the Establishments &nbsp;
 <b>For, Adhaan Solution Pvt. Ltd.</b></li>
                                                <li>Designation <label className="pl-5">Authorised Signatory</label></li>
                                                <li>Name and Address of Factory/Establishment or Rubber Stamp Thereof</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                




                                {/* <div className="row no-gutters border border-dark p-2">
                                        <div className="col-sm-6 pt-4">
                                            <div className="form-group mb-0 input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0">Place</label>
                                                </div>
                                                <input type="text" name="place" className="px-0 py-1 mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="border border-dark p-1 text-center">
                                                <div className="image-upload sign-upload">
                                                    <label htmlFor="Uploadsign" className="mb-0">
                                                        <img src="sign.png" id="sign" alt="Upload Sign" className="img-fluid" />
                                                        <img src={this.state.Sign} id="sign" alt=" " className="img-fluid1" />
                                                    </label>
                                                    <input id="Uploadsign" type="file" onchange="readSign(this);" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                            </form>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="col-md-12 text-center">
                    <button class="btn btn-primary btn-lg active mr-2" role="button" aria-pressed="true" onClick={this.savebtn}>Countinue</button>
                </div>
                <br/>

                

                  



           

                                





                {/* container close */}</div >



                


        );
    }
}
export default DeclrationForm;