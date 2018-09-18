import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchData } from "../actions/index"

class DataRender extends Component {
    componentDidMount() {
        // this.props.fetchData();
    }
        constructor(props) {
            super(props);
            this.state = { term: "" };
     }
    render() {
        return (
        <div>
            <span id="filter">
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Age </font>
                    </button>   
                  <div className="sort-content">
                    <a>15-20</a>
                    <a>21-25</a>
                    <a>26-30</a>
                    <a>31-35</a>
                    <a>36-40</a>
                    <a>41-45</a>
                    <a>46-50</a>
                    <a>51-55</a>
                    <a>56-60</a>
                    <a>61-65</a>
                    <a>66-70</a>
                    <a>71-75</a>
                    <a>76-80</a>
                    <a>81-85</a>
                    <a>86-90</a>
                    <a>91-95</a>
                    <a>96-100</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Work Class </font>
                    </button>   
                  <div className="sort-content">
                    <a>Private</a>
                    <a>State-gov</a>
                    <a>Federal-gov</a>
                    <a>Self-emp-not-inc</a>
                    <a>Self-emp-inc</a>
                    <a>Local-gov</a>
                    <a>Without-pay</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Age </font>
                    </button>   
                  <div className="sort-content">
                    <a>15-20</a>
                    <a>21-25</a>
                    <a>26-30</a>
                    <a>31-35</a>
                    <a>36-40</a>
                    <a>41-45</a>
                    <a>46-50</a>
                    <a>51-55</a>
                    <a>56-60</a>
                    <a>61-65</a>
                    <a>66-70</a>
                    <a>71-75</a>
                    <a>76-80</a>
                    <a>81-85</a>
                    <a>86-90</a>
                    <a>91-95</a>
                    <a>96-100</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Education </font>
                    </button>   
                  <div className="sort-content">
                    <a>Preschool</a>
                    <a>HS-grad</a>
                    <a>7th-8th</a>
                    <a>9th</a>
                    <a>10th</a>
                    <a>11th</a>
                    <a>12th </a>
                    <a>Some-college</a>
                    <a>Assoc-voc</a>
                    <a>Bachelors</a>
                    <a>Masters</a>
                    <a>Doctorate</a>
                    <a>Prof-school</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Marital Status </font>
                    </button>   
                  <div className="sort-content">
                    <a>Widowed</a>
                    <a>Divorced</a>
                    <a>Separated</a>
                    <a>Never-married</a>
                    <a>Married-civ-spouse</a>
                    <a>Married-spouse-absent</a>
                    <a>Married-AF-spouse</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2">Occupation</font>
                    </button>   
                  <div className="sort-content">
                    <a>Exec-managerial</a>
                    <a>Machine-op-inspct</a>
                    <a>Separated</a>
                    <a>Prof-specialty</a>
                    <a>Adm-clerical</a>
                    <a>Transport-moving</a>
                    <a>Sales</a>
                    <a>Craft-repair</a>
                    <a>Farming-fishing</a>
                    <a>Tech-support</a>
                    <a>Never-married</a>
                    <a>Protective-serv</a>
                    <a>Handlers-cleaners</a>
                    <a>Armed-Forces</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Relationship </font>
                    </button>   
                  <div className="sort-content">
                    <a>Not-in-family</a>
                    <a>Unmarried</a>
                    <a>Own-child</a>
                    <a>Other-relative</a>
                    <a>Husband</a>
                    <a>Wife</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Race </font>
                    </button>   
                  <div className="sort-content">
                    <a>White</a>
                    <a>Black</a>
                    <a>Asian-Pac-Islander</a>
                    <a>Other</a>
                    <a>Amer-Indian-Eskimo</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Sex </font>
                    </button>   
                  <div className="sort-content">
                    <a>Male</a>
                    <a>Female</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Work Hours Per Week </font>
                    </button>   
                  <div className="sort-content">
                    <a>0-10</a>
                    <a>11-20</a>
                    <a>21-30</a>
                    <a>31-40</a>
                    <a>51-60</a>
                    <a>61-70</a>
                    <a>71-80</a>
                    <a>81-90</a>
                    <a>91-100</a>
                  </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn btn-secondary">
                      <font size="2"> Native Country </font>
                    </button>   
                  <div className="sort-content">
                    <a>United-States</a>
                    <a>Mexico </a>
                    <a>Greece </a>
                    <a>Vietnam</a>
                    <a>China </a>
                    <a>Taiwan </a>
                    <a>India  </a>
                    <a>Philippines </a>
                    <a>Trinadad&Tobago</a>
                    <a>Canada</a>
                    <a>South</a>
                    <a>Holand-Netherlands </a>
                    <a>Puerto-Rico</a>
                    <a>Poland  </a>
                    <a>Poland  </a>
                    <a>England</a>
                    <a>Germany </a>
                    <a>Italy</a>
                    <a>Japan </a>
                    <a>Hong Kong</a>
                    <a>Honduras</a>
                    <a>Cuba</a>
                    <a>Ireland </a>
                    <a>Cambodia</a>
                    <a>Peru </a>
                    <a>Nicaragua </a>
                    <a>Dominican-Republic</a>
                    <a>Haiti </a>
                    <a>Hungary </a>
                    <a>Columbia </a>
                    <a>Guatemala  </a>
                    <a>El-Salvador </a>
                    <a>Jamaica</a>
                    <a>Ecuador</a>
                    <a>France  </a>
                    <a>Yugoslavia</a>
                    <a>Portugal  </a>
                    <a>Laos  </a>
                    <a>Thailand</a>
                    <a>Portugal  </a>
                    <a>Laos  </a>
                    <a>Outlying-US(Guam-USVI-etc)</a>
                    <a>Scotland</a>
                  </div>
                </div>
              </span>
            <br />
            <br />
            <br />
            <br />
        </div>
        );
      }
    }
    
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({fetchData}, dispatch);
    }
    
    export default connect(mapDispatchToProps)(DataRender);
  
