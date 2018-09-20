import React from 'react'
import { Field, reduxForm } from 'redux-form'
import data from "../data.json"
import * as tf from '@tensorflow/tfjs';
import TensorModel from "./TensorModel"


const SimpleForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label><h4>Age:</h4></label>
                    <div>
                        <p><label><Field name="age" component="input" type="radio" value="1"/>15-20</label>
                        <label><Field name="age" component="input" type="radio" value="2"/>21-25</label>
                        <label><Field name="age" component="input" type="radio" value="3"/>26-30</label>
                        <label><Field name="age" component="input" type="radio" value="4"/>31-35</label>
                        <label><Field name="age" component="input" type="radio" value="5"/>36-40</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="6"/>41-45</label>
                        <label><Field name="age" component="input" type="radio" value="7"/>46-50</label>
                        <label><Field name="age" component="input" type="radio" value="8"/>51-55</label>
                        <label><Field name="age" component="input" type="radio" value="9"/>56-60</label>
                        <label><Field name="age" component="input" type="radio" value="10"/>61-65</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="11"/>66-70</label>
                        <label><Field name="age" component="input" type="radio" value="12"/>71-75</label>
                        <label><Field name="age" component="input" type="radio" value="13"/>76-80</label>
                        <label><Field name="age" component="input" type="radio" value="14"/>81-85</label>
                        <label><Field name="age"component="input" type="radio" value="15"/>86-90</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="16"/>91-95</label>
                        <label><Field name="age" component="input" type="radio" value="17"/>96-100</label></p>
                    </div>
            </div>
            <div>
                <label><h4>Work Class:</h4></label>
                    <div> 
                        <p><label><Field name="workclass" component="input" type="radio" value="3"/>Private</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="6"/>State-gov</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="1"/>Federal-gov</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="5"/>Self-emp-not-inc</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="4"/>Self-emp-inc</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="2"/>Local-gov</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="7"/>Without-pay</label></p>
                    </div>
            </div>
            <div>
                <label><h4>Education:</h4></label>
                    <div> 
                        <p><label><Field name="education" component="input" type="radio" value="14"/>Preschool</label>
                        <label><Field name="education" component="input" type="radio" value="12"/>HS-grad</label>
                        <label><Field name="education" component="input" type="radio" value="7"/>9th</label>
                        <label><Field name="education" component="input" type="radio" value="1"/>10th</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="2"/>11th</label>
                        <label><Field name="education" component="input" type="radio" value="3"/>12th </label>
                        <label><Field name="education" component="input" type="radio" value="16"/>Some-college</label>
                        <label><Field name="education" component="input" type="radio" value="9"/>Assoc-voc</label>
                        <label><Field name="education" component="input" type="radio" value="8"/>Assoc-acdm</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="10"/>Bachelors</label>
                        <label><Field name="education" component="input" type="radio" value="13"/>Masters</label>
                        <label><Field name="education" component="input" type="radio" value="11"/>Doctorate</label>
                        <label><Field name="education" component="input" type="radio" value="15"/>Prof-school</label>
                        <label><Field name="education" component="input" type="radio" value="4"/>1st-4th</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="5"/>5th-6th</label>
                        <label><Field name="education" component="input" type="radio" value="6"/>7th-8th</label></p>
                    </div>
                </div>
                <div>
                <label><h4>Marital Status:</h4></label>
                    <div> 
                        <p><label><Field name="marital_status" component="input" type="radio" value="7"/>Widowed</label>
                        <label><Field name="marital_status" component="input" type="radio" value="1"/>Divorced</label>
                        <label><Field name="marital_status" component="input" type="radio" value="6"/>Separated</label>
                        <label><Field name="marital_status" component="input" type="radio" value="5"/>Never-married</label>
                        <label><Field name="marital_status" component="input" type="radio" value="3"/>Married-civ-spouse</label></p>
                        <p><label><Field name="marital_status" component="input" type="radio" value="4"/>Married-spouse-absent</label>
                        <label><Field name="marital_status" component="input" type="radio" value="2"/>Married-AF-spouse</label></p>
                    </div>
                </div>
                <div>
                <label><h4>Occupation:</h4></label>
                    <div> 
                        <p><label><Field name="occupation" component="input" type="radio" value="4"/>Exec-managerial</label>
                        <label><Field name="occupation" component="input" type="radio" value="7"/>Machine-op-inspct</label>
                        <label><Field name="occupation" component="input" type="radio" value="10"/>Prof-specialty</label>
                        <label><Field name="occupation" component="input" type="radio" value="1"/>Adm-clerical</label>
                        <label><Field name="occupation" component="input" type="radio" value="14"/>Transport-moving</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="12"/>Sales</label>
                        <label><Field name="occupation" component="input" type="radio" value="3"/>Craft-repair</label>
                        <label><Field name="occupation" component="input" type="radio" value="5"/>Farming-fishing</label>
                        <label><Field name="occupation" component="input" type="radio" value="13"/>Tech-support</label>
                        <label><Field name="occupation" component="input" type="radio" value="11"/>Protective-serv</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="6"/>Handlers-cleaners</label>
                        <label><Field name="occupation" component="input" type="radio" value="2"/>Armed-Forces</label>
                        <label><Field name="occupation" component="input" type="radio" value="8"/>Other-service</label>
                        <label><Field name="occupation" component="input" type="radio" value="9"/>Priv-house-serv</label></p>
                    </div>
                </div>
                <div>
                <label><h4>Relationship:</h4></label>
                    <div> 
                        <p><label><Field name="relationship" component="input" type="radio" value="2"/>Not-in-family</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="5"/>Unmarried</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="4"/>Own-child</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="3"/>Other-relative</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="1"/>Husband</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="6"/>Wife</label></p>
                    </div>
                </div>
                <div>
                <label><h4>Race:</h4></label>
                    <div> 
                        <p><label><Field name="race" component="input" type="radio" value="5"/>White</label></p>
                        <p><label><Field name="race" component="input" type="radio" value="3"/>Black</label></p>
                        <p><label><Field name="race" component="input" type="radio" value="2"/>Asian-Pac-Islander</label></p>
                        <p><label><Field name="race" component="input" type="radio" value="4"/>Other</label></p>
                        <p><label><Field name="race" component="input" type="radio" value="1"/>Amer-Indian-Eskimo</label></p>
                    </div>
                </div>
                <div>
                <label><h4>Sex:</h4></label>
                    <div> 
                        <p><label><Field name="sex" component="input" type="radio" value="1"/>Female</label></p>
                        <p><label><Field name="sex" component="input" type="radio" value="2"/>Male</label></p>
                    </div>
                </div>
                <div>
                <label><h4>Hours worked per week:</h4></label>
                    <div> 
                    <Field name="hours_per_week" component="input" type="text" placeholder="*Whole numbers only*"/>
                    </div>
                </div>
                <div>
                <label><h4>Native Country: </h4></label>
                    <div> 
                        <p><label><Field name="native_country" component="input" type="radio" value="39"/>United-States</label>
                        <label><Field name="native_country" component="input" type="radio" value="26"/>Mexico </label>
                        <label><Field name="native_country" component="input" type="radio" value="12"/>Greece </label>
                        <label><Field name="native_country" component="input" type="radio" value="40"/>Vietnam</label>
                        <label><Field name="native_country" component="input" type="radio" value="3"/>China </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="36"/>Taiwan </label>
                        <label><Field name="native_country" component="input" type="radio" value="19"/>India  </label>
                        <label><Field name="native_country" component="input" type="radio" value="30"/>Philippines </label>
                        <label><Field name="native_country" component="input" type="radio" value="38"/>Trinadad-Tobago</label>
                        <label><Field name="native_country" component="input" type="radio" value="2"/>Canada</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="35"/>South</label>
                        <label><Field name="native_country" component="input" type="radio" value="15"/>Holand-Netherlands </label>
                        <label><Field name="native_country" component="input" type="radio" value="33"/>Puerto-Rico</label>
                        <label><Field name="native_country" component="input" type="radio" value="31"/>Poland  </label>
                        <label><Field name="native_country" component="input" type="radio" value="9"/>England</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="11"/>Germany </label>
                        <label><Field name="native_country" component="input" type="radio" value="22"/>Italy</label>
                        <label><Field name="native_country" component="input" type="radio" value="24"/>Japan </label>
                        <label><Field name="native_country" component="input" type="radio" value="17"/>Hong Kong</label>
                        <label><Field name="native_country" component="input" type="radio" value="16"/>Honduras</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="5"/>Cuba</label>
                        <label><Field name="native_country" component="input" type="radio" value="21"/>Ireland </label>
                        <label><Field name="native_country" component="input" type="radio" value="1"/>Cambodia</label>
                        <label><Field name="native_country" component="input" type="radio" value="29"/>Peru </label>
                        <label><Field name="native_country" component="input" type="radio" value="20"/>Iran </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="27"/>Nicaragua </label>
                        <label><Field name="native_country" component="input" type="radio" value="6"/>Dominican-Republic</label>
                        <label><Field name="native_country" component="input" type="radio" value="28"/>Haiti </label>
                        <label><Field name="native_country" component="input" type="radio" value="18"/>Hungary </label>
                        <label><Field name="native_country" component="input" type="radio" value="4"/>Columbia </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="13"/>Guatemala  </label>
                        <label><Field name="native_country" component="input" type="radio" value="8"/>El-Salvador </label>
                        <label><Field name="native_country" component="input" type="radio" value="23"/>Jamaica</label>
                        <label><Field name="native_country" component="input" type="radio" value="7"/>Ecuador</label>
                        <label><Field name="native_country" component="input" type="radio" value="10"/>France  </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="41"/>Yugoslavia</label>
                        <label><Field name="native_country" component="input" type="radio" value="32"/>Portugal  </label>
                        <label><Field name="native_country" component="input" type="radio" value="25"/>Laos  </label>
                        <label><Field name="native_country" component="input" type="radio" value="37"/>Thailand</label>
                        <label><Field name="native_country" component="input" type="radio" value="14"/>Haiti</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="34"/>Scotland</label>
                        <label><Field name="native_country" component="input" type="radio" value="28"/>Outlying-US(Guam-USVI-etc)</label></p>
                    </div>
                </div>
                <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        );
    }
    
    export default reduxForm({ form: 'simple'})(SimpleForm)
