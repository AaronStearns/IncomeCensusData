import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = (props) => {
    // console.log(input);
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label><h5>Age:</h5></label>
                    <div>
                        <p><label><Field name="age" component="input" type="radio" value="1"/>15-20</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="2"/>21-25</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="3"/>26-30</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="4"/>31-35</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="5"/>36-40</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="6"/>41-45</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="7"/>46-50</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="8"/>51-55</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="9"/>56-60</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="10"/>61-65</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="11"/>66-70</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="12"/>71-75</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="13"/>76-80</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="14"/>81-85</label></p>
                        <p><label><Field name="age"component="input" type="radio" value="15"/>86-90</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="16"/>91-95</label></p>
                        <p><label><Field name="age" component="input" type="radio" value="17"/>96-100</label></p>
                    </div>
            </div>
            <div>
                <label><h5>Work Class:</h5></label>
                    <div> 
                        <p><label><Field name="workclass" component="input" type="radio" value="1"/>Private</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="2"/>State-gov</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="3"/>Federal-gov</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="4"/>Self-emp-not-inc</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="5"/>Self-emp-inc</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="6"/>Local-gov</label></p>
                        <p><label><Field name="workclass" component="input" type="radio" value="7"/>Without-pay</label></p>
                    </div>
            </div>
            <div>
                <label>Education</label>
                    <div> 
                        <p><label><Field name="education" component="input" type="radio" value="1"/>Preschool</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="2"/>HS-grad</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="3"/>7th-8th</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="4"/>9th</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="5"/>10th</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="6"/>11th</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="7"/>12th </label></p>
                        <p><label><Field name="education" component="input" type="radio" value="8"/>Some-college</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="9"/>Assoc-voc</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="10"/>Bachelors</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="11"/>Masters</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="12"/>Doctorate</label></p>
                        <p><label><Field name="education" component="input" type="radio" value="13"/>Prof-school</label></p>
                    </div>
                </div>
                <div>
                <label>Marital Status</label>
                    <div> 
                        <p><label><Field name="marital_status" component="input" type="radio" value="1"/>Widowed</label></p>
                        <p><label><Field name="marital_status" component="input" type="radio" value="2"/>Divorced</label></p>
                        <p><label><Field name="marital_status" component="input" type="radio" value="3"/>Separated</label></p>
                        <p><label><Field name="marital_status" component="input" type="radio" value="4"/>Never-married</label></p>
                        <p><label><Field name="marital_status" component="input" type="radio" value="5"/>Married-civ-spouse</label></p>
                        <p><label><Field name="marital_status" component="input" type="radio" value="6"/>Married-spouse-absent</label></p>
                        <p><label><Field name="marital_status" component="input" type="radio" value="7"/>Married-AF-spouse</label></p>
                    </div>
                </div>
                <div>
                <label>Occupation</label>
                    <div> 
                        <p><label><Field name="occupation" component="input" type="radio" value="1"/>Exec-managerial</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="2"/>Machine-op-inspct</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="3"/>Separated</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="4"/>Prof-specialty</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="5"/>Adm-clerical</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="6"/>Transport-moving</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="7"/>Sales</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="8"/>Craft-repair</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="9"/>Farming-fishing</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="10"/>Tech-support</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="11"/>Never-married</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="12"/>Protective-serv</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="13"/>Handlers-cleaners</label></p>
                        <p><label><Field name="occupation" component="input" type="radio" value="14"/>Armed-Forces</label></p>
                    </div>
                </div>
                <div>
                <label>Relationship</label>
                    <div> 
                        <p><label><Field name="relationship" component="input" type="radio" value="1"/>Not-in-family</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="2"/>Unmarried</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="3"/>Own-child</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="4"/>Other-relative</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="5"/>Husband</label></p>
                        <p><label><Field name="relationship" component="input" type="radio" value="6"/>Wife</label></p>
                    </div>
                </div>
                <div>
                <label>Race</label>
                    <div> 
                        <p><label><Field name="race" component="input" type="radio" value="1"/>White</label></p>
                        <p><label><Field name="race" component="input" type="radio" value="2"/>Black</label></p>
                        <p><label><Field name="race" component="input" type="radio" value="3"/>Asian-Pac-Islander</label></p>
                        <p><label><Field name="race" component="input" type="radio" value="4"/>Other</label></p>
                        <p><label><Field name="race" component="input" type="radio" value="5"/>Amer-Indian-Eskimo</label></p>
                    </div>
                </div>
                <div>
                <label>Sex</label>
                    <div> 
                        <p><label><Field name="sex" component="input" type="radio" value="1"/>Female</label></p>
                        <p><label><Field name="sex" component="input" type="radio" value="2"/>Male</label></p>
                    </div>
                </div>
                <div>
                <label>Hours Worked PerWeek</label>
                    <div> 
                    <Field name="hours_per_week" component="input" type="text" placeholder="*Whole numbers ONLY*"/>
                    </div>
                </div>
                <div>
                <label>Native Country</label>
                    <div> 
                        <p><label><Field name="native_country" component="input" type="radio" value="1"/>United-States</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="2"/>Mexico </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="3"/>Greece </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="4"/>Vietnam</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="5"/>China </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="6"/>Taiwan </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="7"/>India  </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="8"/>Philippines </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="9"/>Trinadad&Tobago</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="10"/>Canada</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="11"/>South</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="12"/>Holand-Netherlands </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="13"/>Puerto-Rico</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="14"/>Poland  </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="15"/>Poland  </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="16"/>England</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="17"/>Germany </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="18"/>Italy</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="19"/>Japan </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="20"/>Hong Kong</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="21"/>Honduras</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="22"/>Cuba</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="23"/>Ireland </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="24"/>Cambodia</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="25"/>Peru </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="26"/>Nicaragua </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="27"/>Dominican-Republic</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="28"/>Haiti </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="29"/>Hungary </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="30"/>Columbia </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="31"/>Guatemala  </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="32"/>El-Salvador </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="33"/>Jamaica</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="34"/>Ecuador</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="35"/>France  </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="35"/>Yugoslavia</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="37"/>Portugal  </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="38"/>Laos  </label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="39"/>Thailand</label></p>
                        <p><label><Field name="native_country" component="input" type="radio" value="40"/>Outlying-US(Guam-USVI-etc), Scotland</label></p>
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