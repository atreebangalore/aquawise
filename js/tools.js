

var suggestions_array = [];
var sub_suj1_array = [];
var sub_suj2_array = [];

var space_array = [];
var sub_space1_array = [];
var sub_space2_array = [];

var Totalcost_array = [];

/*function form_submit() {
    let region = document.getElementById('regi').value;
    let pws = document.getElementById('pws').value;
    let sws = document.getElementById('sws').value;
    let tos = document.getElementById('tos').value;
    let students = document.getElementById('children').value;
    let teachers = document.getElementById('teachers').value;
    let area_available = document.getElementById('aovl').value;
    let kitchen = document.getElementById('ka').value;
    let end_use = document.getElementById('eutw').value;

    let Pk = (kitchen === "Y") ? 5 : 0;
    const Pt = 15;
    let Ps = (tos === "HP" || tos === "HS") ? 15 : 5;

    //calculate CBOD
    let cbod;
    switch (region) {
        case 'urb':
            cbod = (kitchen === "Y") ? 370 : 250;
            break;
        case 'p_urb':
            cbod = (kitchen === "Y") ? 300 : 250;
            break;
        case 'rur':
            cbod = (kitchen === "Y") ? 225 : 250;
            break;
        default:
            cbod = 0;
            break;
    }
    // Calculate the quantity of greywater in liters
    const grey_water = ((students * Pk) + (teachers * Pt) + (Ps * students)) * 0.8;

    // Calculate the load of wastewater in mg/L
    const wasteWater = cbod * grey_water;

    // Calculate the volumes of the equilibration and contact tanks
    const eqilib_tank = 0.4 * grey_water / 1000;
    const contact_tank = 0.8 * grey_water / 1000;


    // Constructed Wetland Area Calculations

    // Horizontal Constructed Wetlands (HCW)
    let outlet_bod_30_mgl_area_hcw_m2 = (grey_water * Math.log((cbod * 0.6) - 30)) / (0.15 * 1000);
    let outlet_bod_10_mgl_area_hcw_m2 = (grey_water * Math.log((cbod * 0.6) - 10)) / (0.15 * 1000);

    // Vertical Constructed Wetlands (VCW)
    let outlet_bod_30_mgl_area_vcw_m2 = (grey_water * Math.log((cbod * 0.6) - 30)) / (0.2 * 1000);
    let outlet_bod_10_mgl_area_vcw_m2 = (grey_water * Math.log((cbod * 0.6) - 10)) / (0.2 * 1000);

    // Free Water Surface Wetlands (FWS)
    let outlet_bod_30_mgl_area_fws_m2 = (grey_water * 365 * Math.log((30 - 10) / ((cbod * 0.6) - 10))) / (1000 * -33);
    let outlet_bod_10_mgl_area_fws_m2 = (grey_water * 365 * Math.log((10 - 9) / ((cbod * 0.6) - 9))) / (1000 * -33);

    // Horizontal Flow (HF) and Vertical Flow (VF) Systems
    let outlet_bod_30_mgl_area_hf_m2 = wasteWater / 7000;
    let outlet_bod_30_mgl_area_vf_m2 = wasteWater / 9000;
    let outlet_bod_10_mgl_area_hf_m2 = wasteWater / 6500;
    let outlet_bod_10_mgl_area_vf_m2 = wasteWater / 8000;


    // Total Area Calculations for 30 mg/L BOD
    let tar_outlet_bod_30_mgl_t_area_hcw_m2 = eqilib_tank + outlet_bod_30_mgl_area_hcw_m2;
    let tar_outlet_bod_30_mgl_t_area_vcw_m2 = eqilib_tank + outlet_bod_30_mgl_area_vcw_m2;
    let tar_outlet_bod_30_mgl_t_area_fws_m2 = eqilib_tank + outlet_bod_30_mgl_area_fws_m2;
    let tar_outlet_bod_30_mgl_t_area_hf_m2 = eqilib_tank + outlet_bod_30_mgl_area_hf_m2;
    let tar_outlet_bod_30_mgl_t_area_vf_m2 = eqilib_tank + outlet_bod_30_mgl_area_vf_m2;

    // Total Area Calculations for 10 mg/L BOD
    let tar_outlet_bod_10_mgl_t_area_hcw_m2 = eqilib_tank + contact_tank + outlet_bod_10_mgl_area_hcw_m2;
    let tar_outlet_bod_10_mgl_t_area_vcw_m2 = eqilib_tank + contact_tank + outlet_bod_10_mgl_area_vcw_m2;
    let tar_outlet_bod_10_mgl_t_area_fws_m2 = eqilib_tank + contact_tank + outlet_bod_10_mgl_area_fws_m2;
    let tar_outlet_bod_10_mgl_t_area_hf_m2 = eqilib_tank + contact_tank + outlet_bod_10_mgl_area_hf_m2;
    let tar_outlet_bod_10_mgl_t_area_vf_m2 = eqilib_tank + contact_tank + outlet_bod_10_mgl_area_vf_m2;

    // Feasibility Checks for 30 mg/L BOD
    let tar_outlet_bod_30_mgl_hcw = tar_outlet_bod_30_mgl_t_area_hcw_m2 < area_available ? 1 : 0;
    let tar_outlet_bod_30_mgl_vcw = tar_outlet_bod_30_mgl_t_area_vcw_m2 < area_available ? 1 : 0;
    let tar_outlet_bod_30_mgl_fws = tar_outlet_bod_30_mgl_t_area_fws_m2 < area_available ? 1 : 0;
    let tar_outlet_bod_30_mgl_hf = tar_outlet_bod_30_mgl_t_area_hf_m2 < area_available ? 1 : 0;
    let tar_outlet_bod_30_mgl_vf = tar_outlet_bod_30_mgl_t_area_vf_m2 < area_available ? 1 : 0;

    // Feasibility Checks for 10 mg/L BOD
    let tar_outlet_bod_10_mgl_vcw = tar_outlet_bod_10_mgl_t_area_vcw_m2 < area_available ? 1 : 0;
    let tar_outlet_bod_10_mgl_fws = tar_outlet_bod_10_mgl_t_area_fws_m2 < area_available ? 1 : 0;
    let tar_outlet_bod_10_mgl_hcw = tar_outlet_bod_10_mgl_t_area_hcw_m2 < area_available ? 1 : 0;
    let tar_outlet_bod_10_mgl_hf = tar_outlet_bod_10_mgl_t_area_hf_m2 < area_available ? 1 : 0;
    let tar_outlet_bod_10_mgl_vf = tar_outlet_bod_10_mgl_t_area_vf_m2 < area_available ? 1 : 0;

    //calculating capital for 30 mg/L

    // Horizontal Subsurface Flow Wetland (HCW)
    let capex_ol_bod_30_mgl_hcw = grey_water * 150;
    let opex_ol_bod_30_mgl_hcw = 12000;
    let tco_30_mgl_hcw = capex_ol_bod_30_mgl_hcw + opex_ol_bod_30_mgl_hcw;

// Vertical Subsurface Flow Wetland (VCW)
    let capex_ol_bod_30_mgl_vcw = grey_water * 180;
    let opex_ol_bod_30_mgl_vcw = 15000;
    let tco_30_mgl_vcw = capex_ol_bod_30_mgl_vcw + opex_ol_bod_30_mgl_vcw;

// Free Water Surface Wetland (FWS)
    let capex_ol_bod_30_mgl_fws = grey_water * 100;
    let opex_ol_bod_30_mgl_fws = 12000;
    let tco_30_mgl_fws = capex_ol_bod_30_mgl_fws + opex_ol_bod_30_mgl_fws;

// Horizontal Flow Wetland (HF)
    let capex_ol_bod_30_mgl_hf = grey_water * 80;
    let opex_ol_bod_30_mgl_hf = 6000;
    let tco_30_mgl_hf = capex_ol_bod_30_mgl_hf + opex_ol_bod_30_mgl_hf;

// Vertical Flow Wetland (VF)
    let capex_ol_bod_30_mgl_vf = grey_water * 90;
    let opex_ol_bod_30_mgl_vf = 8000;
    let tco_30_mgl_vf = capex_ol_bod_30_mgl_vf + opex_ol_bod_30_mgl_vf;

    //Calculating cost for 10 Mg/L

    // Horizontal Subsurface Flow Wetland (HCW)
    let capex_ol_bod_10_mgl_hcw = grey_water * 180;
    let opex_ol_bod_10_mgl_hcw = 12000;
    let tco_10_mgl_hcw = capex_ol_bod_10_mgl_hcw + opex_ol_bod_10_mgl_hcw;

// Vertical Subsurface Flow Wetland (VCW)
    let capex_ol_bod_10_mgl_vcw = grey_water * 200;
    let opex_ol_bod_10_mgl_vcw = 15000;
    let tco_10_mgl_vcw = capex_ol_bod_10_mgl_vcw + opex_ol_bod_10_mgl_vcw;

// Free Water Surface Wetland (FWS)
    let capex_ol_bod_10_mgl_fws = grey_water * 120;
    let opex_ol_bod_10_mgl_fws = 12000;
    let tco_10_mgl_fws = capex_ol_bod_10_mgl_fws + opex_ol_bod_10_mgl_fws;

// Horizontal Flow Wetland (HF)
    let capex_ol_bod_10_mgl_hf = grey_water * 90;
    let opex_ol_bod_10_mgl_hf = 6000;
    let tco_10_mgl_hf = capex_ol_bod_10_mgl_hf + opex_ol_bod_10_mgl_hf;

// Vertical Flow Wetland (VF)
    let capex_ol_bod_10_mgl_vf = grey_water * 100;
    let opex_ol_bod_10_mgl_vf = 8000;
    let tco_10_mgl_vf = capex_ol_bod_10_mgl_vf + opex_ol_bod_10_mgl_vf;

    let tar_30 = [];
    let tar_10 = [];

// Assign rounded values to the array elements
    tar_30[0] = Math.round(tar_outlet_bod_30_mgl_t_area_fws_m2 * 100) / 100; // Rounded to 2 decimal places
    tar_30[1] = Math.round(tar_outlet_bod_30_mgl_t_area_vcw_m2 * 100) / 100; // Rounded to 2 decimal places
    tar_30[2] = Math.round(tar_outlet_bod_30_mgl_t_area_hcw_m2 * 100) / 100; // Rounded to 2 decimal places
    tar_30[3] = Math.round(tar_outlet_bod_30_mgl_t_area_vf_m2 * 100) / 100; // Rounded to 2 decimal places
    tar_30[4] = Math.round(tar_outlet_bod_30_mgl_t_area_hf_m2 * 100) / 100; // Rounded to 2 decimal places

// Sorting the array in ascending order
    tar_30.sort((a, b) => a - b);



// Assign rounded values to the array elements
    tar_10[0] = Math.round(tar_outlet_bod_10_mgl_t_area_fws_m2 * 100) / 100; // Rounded to 2 decimal places
    tar_10[1] = Math.round(tar_outlet_bod_10_mgl_t_area_vcw_m2 * 100) / 100; // Rounded to 2 decimal places
    tar_10[2] = Math.round(tar_outlet_bod_10_mgl_t_area_hcw_m2 * 100) / 100; // Rounded to 2 decimal places
    tar_10[3] = Math.round(tar_outlet_bod_10_mgl_t_area_vf_m2 * 100) / 100; // Rounded to 2 decimal places
    tar_10[4] = Math.round(tar_outlet_bod_10_mgl_t_area_hf_m2 * 100) / 100; // Rounded to 2 decimal places

// Sorting the array in ascending order
    tar_10.sort((a, b) => a - b);


    console.log(Number(eqilib_tank.toFixed(2)));
    console.log(Number(outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
    console.log(Number(outlet_bod_30_mgl_area_vcw_m2.toFixed(2)));
    console.log(Number(outlet_bod_30_mgl_area_hcw_m2.toFixed(2)));
    console.log(Number(outlet_bod_30_mgl_area_vf_m2.toFixed(2)));
    console.log(Number(outlet_bod_30_mgl_area_hf_m2.toFixed(2)));
  //  console.log(tar_10);


}*/




function calc2() {
    document.getElementById('result cards').style.display = 'none';
    document.getElementById('No_result').style.display = 'none';
    document.getElementById('card_heading').style.display = 'none';

    //region_l=urban&pws_l=public_supply&sws_l=public_supply&tos_l=HP&noch=10&notea=100&aovl=200&aok_l=y&euotw_l=pssd_30bod_wo_chlo
    //urban,public_supply,public_supply.LP,10,100,200,y,pssd_30bod_wo_chlo
    const region_l = document.getElementById('regi').value.toString();
    const pws_l = document.getElementById('pws').value.toString();
    const sws_l = document.getElementById('sws').value.toString();
    // const tos_l = parseInt( document.getElementById('tos').value.toString());
    // const noch = parseInt( document.getElementById('children').value.toString());
    // const notea =parseInt( document.getElementById('teachers').value.toString());
    // const aovl = parseInt( document.getElementById('aovl').value.toString());
    // const aok_l = document.getElementById('ka').value;
    // const euotw_l = document.getElementById('eutw').value;

    const tos_l = document.getElementById('tos').value.toString();
    const noch = parseInt(document.getElementById('children').value.toString());
    const notea = parseInt(document.getElementById('teachers').value.toString());
    const aovl = parseInt(document.getElementById('aovl').value.toString());
    const aok_l = document.getElementById('ka').value.toString();
    const euotw_l = document.getElementById('eutw').value.toString();

    let teacher = document.getElementById('teachers');
    let children = document.getElementById('children');
    let aovl_f = document.getElementById('aovl');


    if (!children.value.length > 0) {
        children.style.borderColor = "#d20909";
        children.style.borderWidth = "1.5px";
        return;
    } else {
        children.style.borderColor = "#1e1e1e";
        children.style.borderWidth = "1px";
    }
    if (!teacher.value.length > 0) {
        teacher.style.borderColor = "#d20909";
        teacher.style.borderWidth = "1.5px";
        return;
    } else {
        teacher.style.borderColor = "#3f3f3f";
        teacher.style.borderWidth = "1px";
    }
    if (!aovl_f.value.length > 0) {
        aovl_f.style.borderColor = "#d20909";
        aovl_f.style.borderWidth = "1.5px";
        return;
    } else {
        aovl_f.style.borderColor = "#3f3f3f";
        aovl_f.style.borderWidth = "1px";
    }

    const box = document.getElementById('load_anim');

    box.style.display = 'flex';


    let end_user_dropdown = document.getElementById('eutw');

    document.getElementById('end_user').innerText = "End Use: " + end_user_dropdown.options[end_user_dropdown.selectedIndex].text;

    console.log(region_l + ',' + pws_l + ',' + sws_l + '.' + tos_l + ',' + noch + ',' + notea + ',' + aovl + ',' + aok_l + ',' + euotw_l);


    let Pk = 0;
    if (aok_l === 'y') {
        Pk = 5;
    }

    let Pt = 15;
    let Ps = 0;
    if (tos_l === 'HP' || tos_l === 'HS') {
        Ps = 15;
    } else if (tos_l === 'LP') {
        Ps = 5;
    }

    let cbod_mgl = 0;
    if ((region_l === 'urban' || region_l === 'peri_urban') && aok_l === 'y') {
        cbod_mgl = 150;
    } else if ((region_l === 'urban' || region_l === 'peri_urban') && aok_l === 'n') {
        cbod_mgl = 100;
    } else if (region_l === 'rural' && aok_l === 'y') {
        cbod_mgl = 200;
    } else if (region_l === 'rural' && aok_l === 'n') {
        cbod_mgl = 150;
    }

    const qgw_ltrs = (((noch * Pk) + (notea * Pt) + (Ps * noch)) * 0.8);
    const load_lw = (cbod_mgl * qgw_ltrs);
    const eq_tnk = ((qgw_ltrs / (1000 * 1)) / 0.6);
    const ct_tnk = ((qgw_ltrs / (1000) * 1) / 0.6) * 2;

    const outlet_bod_30_mgl_area_hcw_m2 = qgw_ltrs * Math.log(((cbod_mgl * 0.6) - 30)) / (0.15 * 1000);
    const outlet_bod_30_mgl_area_vcw_m2 = qgw_ltrs * Math.log(((cbod_mgl * 0.6) - 30)) / (0.2 * 1000);
    const outlet_bod_30_mgl_area_fws_m2 = qgw_ltrs * 365 * Math.log((30 - 10) / ((cbod_mgl * 0.6) - 10)) / (1000 * (-33));
    const outlet_bod_30_mgl_area_hf_m2 = (load_lw / 7000);
    const outlet_bod_30_mgl_area_vf_m2 = (load_lw / 9000);

    const outlet_bod_10_mgl_area_hcw_m2 = qgw_ltrs * Math.log(((cbod_mgl * 0.6) - 10)) / (0.15 * 1000);
    const outlet_bod_10_mgl_area_vcw_m2 = qgw_ltrs * Math.log(((cbod_mgl * 0.6) - 10)) / (0.2 * 1000);
    const outlet_bod_10_mgl_area_fws_m2 = qgw_ltrs * 365 * Math.log((10 - 9) / (cbod_mgl * 0.6 - 9)) / (1000 * (-33));
    const outlet_bod_10_mgl_area_hf_m2 = (load_lw / 6500);
    const outlet_bod_10_mgl_area_vf_m2 = (load_lw / 8000);

    const tar_outlet_bod_30_mgl_t_area_hcw_m2 = eq_tnk + outlet_bod_30_mgl_area_hcw_m2;
    const tar_outlet_bod_30_mgl_t_area_vcw_m2 = eq_tnk + outlet_bod_30_mgl_area_vcw_m2;
    const tar_outlet_bod_30_mgl_t_area_fws_m2 = eq_tnk + outlet_bod_30_mgl_area_fws_m2;
    const tar_outlet_bod_30_mgl_t_area_hf_m2 = eq_tnk + outlet_bod_30_mgl_area_hf_m2;
    const tar_outlet_bod_30_mgl_t_area_vf_m2 = eq_tnk + outlet_bod_30_mgl_area_vf_m2;

    const tar_outlet_bod_10_mgl_t_area_hcw_m2 = eq_tnk + ct_tnk + outlet_bod_10_mgl_area_hcw_m2;
    const tar_outlet_bod_10_mgl_t_area_vcw_m2 = eq_tnk + ct_tnk + outlet_bod_10_mgl_area_vcw_m2;
    const tar_outlet_bod_10_mgl_t_area_fws_m2 = eq_tnk + ct_tnk + outlet_bod_10_mgl_area_fws_m2;
    const tar_outlet_bod_10_mgl_t_area_hf_m2 = eq_tnk + ct_tnk + outlet_bod_10_mgl_area_hf_m2;
    const tar_outlet_bod_10_mgl_t_area_vf_m2 = eq_tnk + ct_tnk + outlet_bod_10_mgl_area_vf_m2;

    let tar_outlet_bod_30_mgl_hcw = 0;
    let tar_outlet_bod_30_mgl_vcw = 0;
    let tar_outlet_bod_30_mgl_fws = 0;
    let tar_outlet_bod_30_mgl_hf = 0;
    let tar_outlet_bod_30_mgl_vf = 0;

    if (tar_outlet_bod_30_mgl_t_area_hcw_m2 < aovl) {
        tar_outlet_bod_30_mgl_hcw = 1;
    }

    if (tar_outlet_bod_30_mgl_t_area_vcw_m2 < aovl) {
        tar_outlet_bod_30_mgl_vcw = 1;
    }

    if (tar_outlet_bod_30_mgl_t_area_fws_m2 < aovl) {
        tar_outlet_bod_30_mgl_fws = 1;
    }

    if (tar_outlet_bod_30_mgl_t_area_hf_m2 < aovl) {
        tar_outlet_bod_30_mgl_hf = 1;
    }

    if (tar_outlet_bod_30_mgl_t_area_vf_m2 < aovl) {
        tar_outlet_bod_30_mgl_vf = 1;
    }

    let tar_outlet_bod_10_mgl_hcw = 0;
    let tar_outlet_bod_10_mgl_vcw = 0;
    let tar_outlet_bod_10_mgl_fws = 0;
    let tar_outlet_bod_10_mgl_hf = 0;
    let tar_outlet_bod_10_mgl_vf = 0;

    if (tar_outlet_bod_10_mgl_t_area_hcw_m2 < aovl) {
        tar_outlet_bod_10_mgl_hcw = 1;
    }

    if (tar_outlet_bod_10_mgl_t_area_vcw_m2 < aovl) {
        tar_outlet_bod_10_mgl_vcw = 1;
    }

    if (tar_outlet_bod_10_mgl_t_area_fws_m2 < aovl) {
        tar_outlet_bod_10_mgl_fws = 1;
    }

    if (tar_outlet_bod_10_mgl_t_area_hf_m2 < aovl) {
        tar_outlet_bod_10_mgl_hf = 1;
    }

    if (tar_outlet_bod_10_mgl_t_area_vf_m2 < aovl) {
        tar_outlet_bod_10_mgl_vf = 1;
    }

    let tar_10 = [];
    tar_10[0] = parseFloat(tar_outlet_bod_10_mgl_t_area_fws_m2.toFixed(2));
    tar_10[1] = parseFloat(tar_outlet_bod_10_mgl_t_area_vcw_m2.toFixed(2));
    tar_10[2] = parseFloat(tar_outlet_bod_10_mgl_t_area_hcw_m2.toFixed(2));
    tar_10[3] = parseFloat(tar_outlet_bod_10_mgl_t_area_vf_m2.toFixed(2));
    tar_10[4] = parseFloat(tar_outlet_bod_10_mgl_t_area_hf_m2.toFixed(2));

    // Sort the array numerically
    tar_10.sort(function (a, b) {
        return a - b;
    });

    let tar_30 = [];
    tar_30[0] = parseFloat(tar_outlet_bod_30_mgl_t_area_fws_m2.toFixed(2));
    tar_30[1] = parseFloat(tar_outlet_bod_30_mgl_t_area_vcw_m2.toFixed(2));
    tar_30[2] = parseFloat(tar_outlet_bod_30_mgl_t_area_hcw_m2.toFixed(2));
    tar_30[3] = parseFloat(tar_outlet_bod_30_mgl_t_area_vf_m2.toFixed(2));
    tar_30[4] = parseFloat(tar_outlet_bod_30_mgl_t_area_hf_m2.toFixed(2));

    // Sort the array numerically
    tar_30.sort(function (a, b) {
        return a - b;
    });
    // Capex and Opex calculations for Outlet BOD 30 mg/l

    let capex_ol_bod_30_mgl_hcw = qgw_ltrs * 150;
    let opex_ol_bod_30_mgl_hcw = 12000;
    let tco_30_mgl_hcw = capex_ol_bod_30_mgl_hcw + opex_ol_bod_30_mgl_hcw;

    let capex_ol_bod_30_mgl_vcw = qgw_ltrs * 180;
    let opex_ol_bod_30_mgl_vcw = 15000;
    let tco_30_mgl_vcw = capex_ol_bod_30_mgl_vcw + opex_ol_bod_30_mgl_vcw;

    let capex_ol_bod_30_mgl_fws = qgw_ltrs * 100;
    let opex_ol_bod_30_mgl_fws = 12000;
    let tco_30_mgl_fws = capex_ol_bod_30_mgl_fws + opex_ol_bod_30_mgl_fws;

    let capex_ol_bod_30_mgl_hf = qgw_ltrs * 80;
    let opex_ol_bod_30_mgl_hf = 6000;
    let tco_30_mgl_hf = capex_ol_bod_30_mgl_hf + opex_ol_bod_30_mgl_hf;

    let capex_ol_bod_30_mgl_vf = qgw_ltrs * 90;
    let opex_ol_bod_30_mgl_vf = 8000;
    let tco_30_mgl_vf = capex_ol_bod_30_mgl_vf + opex_ol_bod_30_mgl_vf;

    // Outlet BOD 10 mg/l calculations
    let capex_ol_bod_10_mgl_hcw = qgw_ltrs * 180;
    let opex_ol_bod_10_mgl_hcw = 12000;
    let tco_10_mgl_hcw = capex_ol_bod_10_mgl_hcw + opex_ol_bod_10_mgl_hcw;

    let capex_ol_bod_10_mgl_vcw = qgw_ltrs * 200;
    let opex_ol_bod_10_mgl_vcw = 15000;
    let tco_10_mgl_vcw = capex_ol_bod_10_mgl_vcw + opex_ol_bod_10_mgl_vcw;

    let capex_ol_bod_10_mgl_fws = qgw_ltrs * 120;
    let opex_ol_bod_10_mgl_fws = 12000;
    let tco_10_mgl_fws = capex_ol_bod_10_mgl_fws + opex_ol_bod_10_mgl_fws;

    let capex_ol_bod_10_mgl_hf = qgw_ltrs * 90;
    let opex_ol_bod_10_mgl_hf = 6000;
    let tco_10_mgl_hf = capex_ol_bod_10_mgl_hf + opex_ol_bod_10_mgl_hf;

    let capex_ol_bod_10_mgl_vf = qgw_ltrs * 100;
    let opex_ol_bod_10_mgl_vf = 8000;
    let tco_10_mgl_vf = capex_ol_bod_10_mgl_vf + opex_ol_bod_10_mgl_vf;


    // console.log(Number(eq_tnk.toFixed(2)));
    // console.log(Number(outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
    // console.log(Number(outlet_bod_30_mgl_area_vcw_m2.toFixed(2)));
    // console.log(Number(outlet_bod_30_mgl_area_hcw_m2.toFixed(2)));
    // console.log(Number(outlet_bod_30_mgl_area_vf_m2.toFixed(2)));
    // console.log(Number(outlet_bod_30_mgl_area_hf_m2.toFixed(2)));

    let vcw_tar10;
    let vcw_capex_ol_bod_10_mgl;
    let vcw_Collection_tank_area_rrf_10bod_w_chlo;
    let vcw_area;

    let hcw_tar10;
    let hcw_capex_ol_bod_10_mgl;
    let hcw_Collection_tank_area_rrf_10bod_w_chlo;
    let hcw_area;

    let hf_tar10;
    let hf_capex_ol_bod_10_mgl;
    let hf_Collection_tank_area_rrf_10bod_w_chlo;
    let hf_area;

    let fwscw_tar10;
    let fwscw_capex_ol_bod_10_mgl;
    let fwscw_Collection_tank_area_rrf_10bod_w_chlo;
    let fwscw_area;

    let vf_tar10;
    let vf_capex_ol_bod_10_mgl;
    let vf_Collection_tank_area_rrf_10bod_w_chlo;
    let vf_area;

    let Equalization_rrf_10bod_w_chlo;

    if (euotw_l === "rrf_10bod_w_chlo") {
        Equalization_rrf_10bod_w_chlo = Number(eq_tnk.toFixed(2));
        // Collection_tank_area_rrf_10bod_w_chlo = Number(eq_tnk.toFixed(2));

        if (tar_outlet_bod_10_mgl_vcw === 1) {
            //Vertical Constructed Wetlands
            vcw_tar10 = tar_10[1].toFixed(2);
            vcw_capex_ol_bod_10_mgl = capex_ol_bod_10_mgl_vcw;
            vcw_Collection_tank_area_rrf_10bod_w_chlo = ct_tnk.toFixed(2);
            vcw_area = outlet_bod_10_mgl_area_vcw_m2.toFixed(2);

        }

        if (tar_outlet_bod_10_mgl_hcw === 1) {
            hcw_tar10 = tar_10[2].toFixed(2);
            hcw_capex_ol_bod_10_mgl = capex_ol_bod_10_mgl_hcw;
            hcw_Collection_tank_area_rrf_10bod_w_chlo = ct_tnk.toFixed(2);
            hcw_area = outlet_bod_10_mgl_area_hcw_m2.toFixed(2);
        }

        if (tar_outlet_bod_10_mgl_hf === 1) {
            hf_tar10 = tar_10[4].toFixed(2);
            hf_capex_ol_bod_10_mgl = capex_ol_bod_10_mgl_hf;
            hf_Collection_tank_area_rrf_10bod_w_chlo = ct_tnk.toFixed(2);
            hf_area = outlet_bod_10_mgl_area_hf_m2.toFixed(2);

        }

        if (tar_outlet_bod_10_mgl_fws === 1) {
            fwscw_tar10 = tar_10[0].toFixed(2);
            fwscw_capex_ol_bod_10_mgl = capex_ol_bod_10_mgl_fws;
            fwscw_Collection_tank_area_rrf_10bod_w_chlo = ct_tnk.toFixed(2);
            fwscw_area = outlet_bod_10_mgl_area_fws_m2.toFixed(2);

        }

        if (tar_outlet_bod_10_mgl_vf === 1) {
            vf_tar10 = tar_10[3].toFixed(2);
            vf_capex_ol_bod_10_mgl = capex_ol_bod_10_mgl_vf;
            vf_Collection_tank_area_rrf_10bod_w_chlo = ct_tnk.toFixed(2);
            vf_area = outlet_bod_10_mgl_area_vf_m2.toFixed(2);


        }


        let e = (Equalization_rrf_10bod_w_chlo);
        let vcw = (parseFloat(vcw_Collection_tank_area_rrf_10bod_w_chlo) + e + parseFloat(vcw_area)).toFixed(2);
        let hcw = (parseFloat(hcw_Collection_tank_area_rrf_10bod_w_chlo) + e + parseFloat(hcw_area)).toFixed(2);
        let hf = (parseFloat(hf_Collection_tank_area_rrf_10bod_w_chlo) + e + parseFloat(hf_area)).toFixed(2);
        let fwscw = (parseFloat(fwscw_Collection_tank_area_rrf_10bod_w_chlo) + e + parseFloat(fwscw_area)).toFixed(2);
        let vf = (parseFloat(vf_Collection_tank_area_rrf_10bod_w_chlo) + e + parseFloat(vf_area)).toFixed(2);

        console.log(vcw);
        console.log(hcw);
        console.log(hf);
        console.log(fwscw);
        console.log(vf);

        let title_valArray = [fwscw, vcw, hcw, vf, hf];

        let holdingTankArray = [e, e, e, e, e];



        let collection_title_valArray = [
            fwscw_Collection_tank_area_rrf_10bod_w_chlo,
            vcw_Collection_tank_area_rrf_10bod_w_chlo
            , hcw_Collection_tank_area_rrf_10bod_w_chlo
            , vf_Collection_tank_area_rrf_10bod_w_chlo
            , hf_Collection_tank_area_rrf_10bod_w_chlo];

        let costArray = [
            fwscw_capex_ol_bod_10_mgl
            , vcw_capex_ol_bod_10_mgl
            , hcw_capex_ol_bod_10_mgl
            , vf_capex_ol_bod_10_mgl
            , hf_capex_ol_bod_10_mgl];

        let vcaArray = [fwscw_area, vcw_area, hcw_area, vf_area, hf_area]

        let label3Array = [
            "Free Water Surface Constructed Wetlands area",
            "Vertical Constructed Wetlands area",
            "Horizontal Constructed Wetlands area",
            "Vertical Filter area",
            "Horizontal filter area"
        ];

        if (!fwscw_capex_ol_bod_10_mgl) {
            setTimeout(() => {
                const box = document.getElementById('load_anim');

                box.style.display = 'none';
                // document.getElementById('No_result').style.display = 'flex';

            }, 1000);
            //return;


        }



        setValuesToModels(title_valArray, costArray, holdingTankArray, collection_title_valArray, vcaArray, label3Array)






        // let fwscw_cap= (Number(fwscw_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // let fwscw_1=(Number(fwscw_eq_tnk.toFixed(2)));
        // let fwscw_2=(Number(fwscw_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
        //
        // let vcw_cap= (Number(vcw_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // let vcw_1=(Number(vcw_eq_tnk.toFixed(2)));
        // let vcw_2=(Number(vcw_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
        //
        // let hcw_cap= (Number(hcw_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // let hcw_1=(Number(hcw_eq_tnk.toFixed(2)));
        // let hcw_2=(Number(hcw_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
        //
        // let vf_cap=(Number(vf_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // let vf_1=(Number(vf_eq_tnk.toFixed(2)));
        // let vf_2=(Number(vf_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
        //
        // let hf_cap= (Number(hf_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // let hf_1=(Number(hf_eq_tnk.toFixed(2)));
        // let hf_2=(Number(hf_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));


    }
    let fwscw_tar_30;
    let fwscw_capex_ol_bod_30_mgl_fws;
    let fwscw_eq_tnk;
    let fwscw_outlet_bod_30_mgl_area_fws_m2;

    let vcw_tar_30;
    let vcw_capex_ol_bod_30_mgl_fws;
    let vcw_eq_tnk;
    let vcw_outlet_bod_30_mgl_area_fws_m2;

    let hcw_tar_30;
    let hcw_capex_ol_bod_30_mgl_fws;
    let hcw_eq_tnk;
    let hcw_outlet_bod_30_mgl_area_fws_m2;

    let vf_tar_30;
    let vf_capex_ol_bod_30_mgl_fws;
    let vf_eq_tnk;
    let vf_outlet_bod_30_mgl_area_fws_m2;

    let hf_tar_30;
    let hf_capex_ol_bod_30_mgl_fws;
    let hf_eq_tnk;
    let hf_outlet_bod_30_mgl_area_fws_m2;




    if (euotw_l === "pssd_30bod_wo_chlo") {


        if (tar_outlet_bod_30_mgl_fws === 1) {
            fwscw_tar_30 = tar_30[0];
            fwscw_capex_ol_bod_30_mgl_fws = capex_ol_bod_30_mgl_fws;
            fwscw_eq_tnk = eq_tnk;
            fwscw_outlet_bod_30_mgl_area_fws_m2 = outlet_bod_30_mgl_area_fws_m2;

        }
        if (tar_outlet_bod_30_mgl_vcw === 1) {
            vcw_tar_30 = tar_30[1];
            vcw_capex_ol_bod_30_mgl_fws = capex_ol_bod_30_mgl_vcw;
            vcw_eq_tnk = eq_tnk;
            vcw_outlet_bod_30_mgl_area_fws_m2 = outlet_bod_30_mgl_area_vcw_m2;
        }
        if (tar_outlet_bod_30_mgl_hcw === 1) {
            hcw_tar_30 = tar_30[2];
            hcw_capex_ol_bod_30_mgl_fws = capex_ol_bod_30_mgl_hcw;
            hcw_eq_tnk = eq_tnk;
            hcw_outlet_bod_30_mgl_area_fws_m2 = outlet_bod_30_mgl_area_hcw_m2;
        }
        if (tar_outlet_bod_30_mgl_vf === 1) {
            vf_tar_30 = tar_30[3];
            vf_capex_ol_bod_30_mgl_fws = capex_ol_bod_30_mgl_vf;
            vf_eq_tnk = eq_tnk;
            vf_outlet_bod_30_mgl_area_fws_m2 = outlet_bod_30_mgl_area_vf_m2;
        }
        if (tar_outlet_bod_30_mgl_hf === 1) {
            hf_tar_30 = tar_30[4];
            hf_capex_ol_bod_30_mgl_fws = capex_ol_bod_30_mgl_hf;
            hf_eq_tnk = eq_tnk;
            hf_outlet_bod_30_mgl_area_fws_m2 = outlet_bod_30_mgl_area_hf_m2;
        }


        // console.log(Number(fwscw_tar_30.toFixed(2)));
        // console.log(Number(fwscw_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // console.log(Number(fwscw_eq_tnk.toFixed(2)));
        // console.log(Number(fwscw_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
        // console.log(Number(vcw_tar_30.toFixed(2)));
        // console.log(Number(vcw_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // console.log(Number(vcw_eq_tnk.toFixed(2)));
        // console.log(Number(vcw_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
        // console.log(Number(hcw_tar_30.toFixed(2)));
        // console.log(Number(hcw_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // console.log(Number(hcw_eq_tnk.toFixed(2)));
        // console.log(Number(hcw_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
        // console.log(Number(vf_tar_30.toFixed(2)));
        // console.log(Number(vf_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // console.log(Number(vf_eq_tnk.toFixed(2)));
        // console.log(Number(vf_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
        // console.log(Number(hf_tar_30.toFixed(2)));
        // console.log(Number(hf_capex_ol_bod_30_mgl_fws.toFixed(2)));
        // console.log(Number(hf_eq_tnk.toFixed(2)));
        // console.log(Number(hf_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));
        console.log('vcw= ' + vcw_capex_ol_bod_30_mgl_fws);  //undefined
        console.log("fwscw= " + typeof (fwscw_capex_ol_bod_30_mgl_fws));  //undefined
        console.log('hcw= ' + typeof (hcw_capex_ol_bod_30_mgl_fws));  //undefined
        console.log("hf= " + hf_capex_ol_bod_30_mgl_fws);  //undefined
        console.log("vf= " + vf_capex_ol_bod_30_mgl_fws);//undefined

        if (vcw_capex_ol_bod_30_mgl_fws === undefined) {
            vcw_capex_ol_bod_30_mgl_fws = 0;
        }
        if (fwscw_capex_ol_bod_30_mgl_fws === undefined) {
            fwscw_capex_ol_bod_30_mgl_fws = 0;
        }
        if (hcw_capex_ol_bod_30_mgl_fws === undefined) {
            hcw_capex_ol_bod_30_mgl_fws = 0;
        }
        if (hf_capex_ol_bod_30_mgl_fws === undefined) {
            hf_capex_ol_bod_30_mgl_fws = 0;
        }
        if (vf_capex_ol_bod_30_mgl_fws === undefined) {
            vf_capex_ol_bod_30_mgl_fws = 0;
        }
        if (hf_eq_tnk === undefined) {
            hf_eq_tnk = 0;
        }
        if (hcw_eq_tnk === undefined) {
            hcw_eq_tnk = 0;
        }
        if (hcw_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            hcw_outlet_bod_30_mgl_area_fws_m2 = 0;
        }
        if (hf_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            hf_outlet_bod_30_mgl_area_fws_m2 = 0;
        }
        if (vcw_capex_ol_bod_30_mgl_fws === undefined) {
            vcw_capex_ol_bod_30_mgl_fws = 0;
        }
        if (vcw_eq_tnk === undefined) {
            vcw_eq_tnk = 0;
        }
        if (vcw_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            vcw_outlet_bod_30_mgl_area_fws_m2 = 0;
        }

        ////
        if (vf_eq_tnk === undefined) {
            vf_eq_tnk = 0;
        }
        if (vf_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            vf_outlet_bod_30_mgl_area_fws_m2 = 0;
        }
        if (hf_capex_ol_bod_30_mgl_fws === undefined) {
            hf_capex_ol_bod_30_mgl_fws = 0;
        }
        //

        if (hf_eq_tnk === undefined) {
            hf_eq_tnk = 0;
        }
        if (hf_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            hf_outlet_bod_30_mgl_area_fws_m2 = 0;
        }

        if (fwscw_eq_tnk === undefined) {
            fwscw_eq_tnk = 0;
        }
        if (fwscw_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            fwscw_outlet_bod_30_mgl_area_fws_m2 = 0;
        }

        ///////////////////////////////
        if (vcw_capex_ol_bod_30_mgl_fws === undefined) {
            vcw_capex_ol_bod_30_mgl_fws = 0;
        }
        if (vcw_eq_tnk === undefined) {
            vcw_eq_tnk = 0;
        }
        if (vcw_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            vcw_outlet_bod_30_mgl_area_fws_m2 = 0;
        }

        if (hcw_capex_ol_bod_30_mgl_fws === undefined) {
            hcw_capex_ol_bod_30_mgl_fws = 0;
        }
        if (hcw_eq_tnk === undefined) {
            hcw_eq_tnk = 0;
        }
        if (hcw_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            hcw_outlet_bod_30_mgl_area_fws_m2 = 0;
        }

        if (vf_capex_ol_bod_30_mgl_fws === undefined) {
            vf_capex_ol_bod_30_mgl_fws = 0;
        }
        if (vf_eq_tnk === undefined) {
            vf_eq_tnk = 0;
        }
        if (vf_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            vf_outlet_bod_30_mgl_area_fws_m2 = 0;
        }

        if (hf_capex_ol_bod_30_mgl_fws === undefined) {
            hf_capex_ol_bod_30_mgl_fws = 0;
        }
        if (hf_eq_tnk === undefined) {
            hf_eq_tnk = 0;
        }
        if (hf_outlet_bod_30_mgl_area_fws_m2 === undefined) {
            hf_outlet_bod_30_mgl_area_fws_m2 = 0;
        }



        console.log("val= " + vcw_capex_ol_bod_30_mgl_fws)

        if (!vcw_capex_ol_bod_30_mgl_fws) {
            setTimeout(() => {
                const box = document.getElementById('load_anim');

                box.style.display = 'none';
                // document.getElementById('No_result').style.display = 'flex';

            }, 1000);
            //return;


        }

        let fwscw_cap = (Number(fwscw_capex_ol_bod_30_mgl_fws.toFixed(2)));
        let fwscw_1 = (Number(fwscw_eq_tnk.toFixed(2)));
        let fwscw_2 = (Number(fwscw_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));

        let vcw_cap = (Number(vcw_capex_ol_bod_30_mgl_fws.toFixed(2)));
        let vcw_1 = (Number(vcw_eq_tnk.toFixed(2)));
        let vcw_2 = (Number(vcw_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));

        let hcw_cap = (Number(hcw_capex_ol_bod_30_mgl_fws.toFixed(2)));
        let hcw_1 = (Number(hcw_eq_tnk.toFixed(2)));
        let hcw_2 = (Number(hcw_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));

        let vf_cap = (Number(vf_capex_ol_bod_30_mgl_fws.toFixed(2)));
        let vf_1 = (Number(vf_eq_tnk.toFixed(2)));
        let vf_2 = (Number(vf_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));

        let hf_cap = (Number(hf_capex_ol_bod_30_mgl_fws.toFixed(2)));
        let hf_1 = (Number(hf_eq_tnk.toFixed(2)));
        let hf_2 = (Number(hf_outlet_bod_30_mgl_area_fws_m2.toFixed(2)));

        let vcw = (parseFloat(vcw_1) + parseFloat(vcw_2)).toFixed(2);
        let hcw = (parseFloat(hcw_1) + parseFloat(hcw_2)).toFixed(2);
        let hf = (parseFloat(hf_1) + parseFloat(hf_2)).toFixed(2);
        let fwscw = (parseFloat(fwscw_1) + parseFloat(fwscw_2)).toFixed(2);
        let vf = (parseFloat(vf_1) + parseFloat(vf_2)).toFixed(2);



        let holdingTankArray = [fwscw_1, vcw_1, hcw_1, vf_1, hf_1];
        let title_valArray = [fwscw, vcw, hcw, vf, hf];
        let costArray = [fwscw_cap, vcw_cap, hcw_cap, vf_cap, hf_cap];
        let vcaArray = [fwscw_2, vcw_2, hcw_2, vf_2, hf_2];

        let collection_title_valArray = [0, 0, 0, 0, 0]
        let label3Array = []


        setValuesToModels(title_valArray, costArray, holdingTankArray, collection_title_valArray, vcaArray, label3Array)




    }

    function setValuesToModels(tileValArray1, costArray1, holdingTankArray1, collection_title_valArray1, vcaArray1) {

        tileValArray1 = tileValArray1.map(value => isNaN(value) ? 0 : value);
        let link_array_30=['https://drive.google.com/file/d/1u88mRqcKZ22JtLskvM7ei-U54gxQ2Sag/view?usp=drive_link',
            'https://drive.google.com/file/d/10mXSi0dFP8lf143C0NYZ-FT3dvhTyqhB/view?usp=drive_link',
          'https://drive.google.com/file/d/1mZfXVwvojIa7VIzdmhhJMDoo795b_RB_/view?usp=drive_link',
            'https://drive.google.com/file/d/1sVue4Xk9CmhzkVjZGE83sKOLk6abceS3/view?usp=drive_link',
            'https://drive.google.com/file/d/1-M6w8hqyZ__rBdcCIPq34Mn_bQwF3P3J/view?usp=drive_link']

            let link_array_10=['https://drive.google.com/file/d/1fODO7xNR_S8VFBTDV6tvZpsD7fveN2U1/view?usp=drive_link', 
                'https://drive.google.com/file/d/1ZGnEASAXeIe-kFH7zgyGbt52eMCr5X5C/view?usp=drive_link', 
                'https://drive.google.com/file/d/1p7Bu2dHE8Ag-y8nXhqmMi_i1l45b6A8G/view?usp=drive_link', 
                'https://drive.google.com/file/d/1Zmb9JdYXd-kACr6UYO4RDVbu9tI_Ftyz/view?usp=drive_link', 
                'https://drive.google.com/file/d/1_3F9z8rDaIVSMWHRqwkCQ53y3skcpEvQ/view?usp=drive_link']

        const tileValArray = tileValArray1;
        const costArray = costArray1;
        const holdingTankArray = holdingTankArray1;
        const collection_title_valArray = collection_title_valArray1
        const vcaArray = vcaArray1;

        // Create an array of objects with value and original index
        const indexedArray = tileValArray.map((value, index) => ({ value, index }));

        // Sort the indexed array based on the values in tileValArray
        indexedArray.sort((a, b) => a.value - b.value);
        const label3Array = [
            "Free Water Surface Constructed Wetlands area",
            "Vertical Constructed Wetlands area",
            "Horizontal Constructed Wetlands area",
            "Vertical Filter area",
            "Horizontal filter area"
        ];
        const labelheadArray = [
            "Free Water Surface Constructed Wetlands",
            "Vertical Constructed Wetlands ",
            "Horizontal Constructed Wetlands",
            "Vertical Filter",
            "Horizontal filter"
        ];

        // Create the sorted tileValArray and rearrange other arrays
        const sortedTileValArray = indexedArray.map(item => item.value);
        const rearrangedCostArray = indexedArray.map(item => costArray[item.index]);
        const rearrangedHoldingTankArray = indexedArray.map(item => holdingTankArray[item.index]);
        const rearrangedCollectionTitleValArray = indexedArray.map(item => collection_title_valArray[item.index]);
        const rearrangedVcaArray = indexedArray.map(item => vcaArray[item.index]);
        const rearrangedlabelArray = indexedArray.map(item => label3Array[item.index]);
        const rearrangedtitleArray = indexedArray.map(item => labelheadArray[item.index]);
        const rearrangedlinkArray_30 = indexedArray.map(item => link_array_30[item.index]);
        const rearrangedlinkArray_10 = indexedArray.map(item => link_array_10[item.index]);






        console.log(tileValArray);

        const original_tileValArray = tileValArray;
        const sortedArray = [...original_tileValArray].sort((a, b) => a - b);



        console.log("array= " + original_tileValArray);
        console.log("sorted array= " + sortedArray);



        let sum = 0;
              
        sortedArray.forEach(value => {
            let numberValue = parseFloat(value);
            if (!isNaN(value)) {
                sum += numberValue;
            }
        });
        sum = Number(sum).toFixed(1);

        console.log("sum of array=" + sum)
        if (sum <= 0) {

            setTimeout(() => {
                const box = document.getElementById('load_anim');

                box.style.display = 'none';
                document.getElementById('No_result').style.display = 'flex';

            }, 1000);
            return;
        }
        let rearrangedlinkArray=rearrangedlinkArray_30;



        for (var i = 0; i < tileValArray.length; i++) {
            //card_5_collection

            if (collection_title_valArray[i] === 0) {
                document.getElementById(`card_${i + 1}_collection_val`).style.display = 'none';
                document.getElementById(`card_${i + 1}_collection`).style.display = 'none';
                document.getElementById(`card_${i + 1}_collection_div`).style.display = 'none';

            } else {

                rearrangedlinkArray=rearrangedlinkArray_10;
                document.getElementById(`card_${i + 1}_collection_val`).style.display = 'flex';
                document.getElementById(`card_${i + 1}_collection`).style.display = 'flex';
                document.getElementById(`card_${i + 1}_collection_div`).style.display = 'flex';
            }

            //card_1_capex_val card_1_vca_val card_1_wetland_val card_1_collection_val card_1_holding_val
            document.getElementById(`card_${i + 1}_info`).innerText = 'Total Area: ' + sortedTileValArray[i] + ' m2';
            document.getElementById(`card_${i + 1}_holding_val`).innerText = rearrangedHoldingTankArray[i] + ' m2';
            document.getElementById(`card_${i + 1}_collection_val`).innerText = rearrangedCollectionTitleValArray[i] + ' m2';
            document.getElementById(`card_${i + 1}_vca_val`).innerText = rearrangedVcaArray[i] + ' m2';
            document.getElementById(`card_${i + 1}_capex_val`).innerText = '₹' + rearrangedCostArray[i];
            document.getElementById(`card_${i + 1}_title`).innerText = rearrangedtitleArray[i];
            document.getElementById(`card_${i + 1}_vca`).innerText = rearrangedlabelArray[i];
            
        
            
     

            

            if (sortedTileValArray[i] < 1) {
                document.getElementById(`card_${i + 1}`).style.display = 'none';
            } else {
                document.getElementById(`card_${i + 1}`).style.display = 'block';
            }



        }
        setTimeout(() => {
            const box = document.getElementById('load_anim');

            box.style.display = 'none';
            document.getElementById('result cards').style.display = 'flex';
            document.getElementById('card_heading').style.display = 'inline-block';
            document.getElementById("res").scrollIntoView();

        }, 1000);

        console.log(rearrangedlinkArray)

        

        document.getElementById(`card_1_btn`).onclick=(function(){
            window.open(rearrangedlinkArray[0])
        })
        document.getElementById(`card_2_btn`).onclick=(function(){
            window.open(rearrangedlinkArray[1])
        })
        document.getElementById(`card_3_btn`).onclick=(function(){
            window.open(rearrangedlinkArray[2])
        })
        document.getElementById(`card_4_btn`).onclick=(function(){
            window.open(rearrangedlinkArray[3])
        })
        document.getElementById(`card_5_btn`).onclick=(function(){
            window.open(rearrangedlinkArray[4])
        })
        document.getElementById(`card_6_btn`).onclick=(function(){
            window.open(rearrangedlinkArray[5])
        })





    }

}
document.getElementById('print_btn').addEventListener('click', () => {
    const result = document.getElementById('print').innerHTML;
    const element = document.getElementById('print'); // Get the HTML element to be converted to PDF
    var wnd = window.open('about:blank', '', '_blank');
    wnd.document.write("<style>\n" +
        ".content{\n" +
        "    width: 100%;\n" +
        "    margin: auto;\n" +
        "\n" +
        "    justify-content: center;\n" +
        "    flex-wrap: wrap;\n" +
        "    padding-top: 10px;\n" +
        "    padding-bottom: 10px;\n" +
        "    display: none;\n" +
        "}\n" +
        ".btn{display: none}" +
        ".content .card{\n" +
        "    margin: 5px;\n" +
        "    background: #fff;\n" +
        "    width: calc(22% );\n" +
        "    text-align: center;\n" +
        "    padding: 15px 30px  30px 30px;\n" +
        "    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n" +
        "}\n" +
        ".content .card .top{\n" +
        "    height: 70px;\n" +
        "    display: flex;\n" +
        "    justify-content: center;\n" +
        "    color: #fff;\n" +
        "    padding: 12px 0 0 0 ;\n" +
        "    align-items: center;\n" +
        "  text-align: right;\n" +
        "    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%);\n" +
        "}\n" +
        ".content .card .top .title{\n" +
        "    font-size: 15px;\n" +
        "    font-weight: 600;\n" +
        "    width: 90%;\n" +
        "    text-align:center;\n" +
        "}\n" +
        ".content .card .top .price-sec{\n" +
        "    margin-top: -10px;\n" +
        "    font-weight: 600;\n" +
        "}\n" +
        ".content .card .top .price{\n" +
        "    font-size: 45px;\n" +
        "}\n" +
        ".content .card .info{\n" +
        "    font-size: 16px;\n" +
        "    margin-top: 20px;\n" +
        "}\n" +
        ".spn{\n" +
        "    max-width: 60%;\n" +
        "    text-align: start;\n" +
        "}\n" +
        ".content .card .details .one{\n" +
        "    margin-top: 25px;\n" +
        "    font-size: 15px;\n" +
        "    display: flex;\n" +
        "    justify-content: space-between;\n" +
        "    align-items: center;\n" +
        "    position: relative;\n" +
        "}\n" +
        ".content .card .details .one::before{\n" +
        "    position: absolute;\n" +
        "    content: \"\";\n" +
        "    width: 100%;\n" +
        "    background: #ddd;\n" +
        "    height: 1px;\n" +
        "    left: 0;\n" +
        "    top: -12px;\n" +
        "    border-radius: 25px;\n" +
        "}\n" +
        ".onex ::before{\n" +
        "    content: none;\n" +
        "}\n" +
        ".content .card .details .one i{\n" +
        "    color: #06556b;\n" +
        "}\n" +
        ".content .card .details i.fa-times{\n" +
        "    color: #cd3241;\n" +
        "}\n" +
        ".content .card button{\n" +
        "    outline: none;\n" +
        "    border: none;\n" +
        "    height: 42px;\n" +
        "    color: #fff;\n" +
        "    margin-top: 30px;\n" +
        "    border-radius: 3px;\n" +
        "    font-size: 18px;\n" +
        "    width: 100%;\n" +
        "    display: none;\n" +
        "    transition: all 0.3s ease;\n" +
        "    cursor: pointer;\n" +
        "    letter-spacing: 1px;\n" +
        "}\n" +
        ".content .one .top,\n" +
        ".content .one button{\n" +
        "    background: #0B4E60;\n" +
        "}\n" +
        ".content .two .top,\n" +
        ".content .two button{\n" +
        "    background: #0B4E60;\n" +
        "}\n" +
        ".content .three .top,\n" +
        ".content .three button{\n" +
        "    background: #0B4E60;\n" +
        "}\n" +
        ".content button:hover {\n" +
        "    filter: brightness(90%);\n" +
        "}\n" +
        ".content .one ::selection{\n" +
        "    background: #c0e4ee;\n" +
        "}\n" +
        ".content .two ::selection{\n" +
        "    background:  #f2b08c;\n" +
        "}\n" +
        ".content .three ::selection{\n" +
        "    background: #d0f9fb;\n" +
        "}</style>   <title>.</title> <div class=\"text-center\">\n" +
        "            <h2 class=\"section-heading text-uppercase\" style='width: 100%; text-align: center'>AqwaWISE</h2>\n" +
        "        </div>" + result);
    wnd.print();

    wnd.close();



})

