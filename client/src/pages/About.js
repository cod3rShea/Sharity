import React from "react";
import foodtriangle from "./images/foodtriangle.jpg"


function About() {
    return (
        <React.Fragment>
            <div className="create_business_registration">

                <h3>Our mision is to reduce food waste by feeding people, one donation at a time.</h3>
                <p>In 2017, almost 41 million tons of food were generated in the United States.</p>
                <p>While Americans dispose of millions of tons of food, the U.S. Department of Agriculture estimates that 11.8 percent of American households - about 15 million households - had difficulty providing enough food for all their members due to a lack of resources at some time during 2017.</p>
                <p> In many cases, the food tossed into our nation’s landfills is wholesome, edible food.</p>
                <p> Redistribution is a win-win solution. Donors can reduce their disposal costs and gain some tax advantages while doing a good thing.</p>
                <p> People get fed.</p>
                <p>The Environmental Protection Agency (EPA) has established a food recovery hierarchy. </p>
                <p>The major source of food waste can be reduced at the source and after that feeding hungry people is the best option.</p>
                {/* <p>The top levels of this inverted triangle are the best way to prevent and divert wasted food. </p> */}
                <img src={foodtriangle} alt="food recoery triangle" height="300" width="300" />
                <p>  Not wasting food is good for the environment, society and the economy.</p>
                <p>Sharity is a responsive web application designed for non - profit organizations to help collect food donations from local restaurants in the area.</p>

                <p ><strong><em>**Source of statistic: United States Department of Agriculture, Economic Research Service, Household Food Security in the United States 2017.</em></strong></p>



                <p>Find Your Local Foodbank has a map of Feeding America member food banks. Some of these food banks might have a minimum donation size requirement for pick up.</p>
                <button><a className="App-link"
                    href="https://www.foodpantries.org"
                    target="_blank"
                    rel="noopener noreferrer">Search Food Pantries by state</a>
                </button>

                <button><a className="App-link"
                    href="https://www.foodpantries.org"
                    target="_blank"
                    rel="noopener noreferrer"> <button><a className="App-link"
                        href="https://ampleharvest.org/find-pantry/"
                        target="_blank"
                        rel="noopener noreferrer">Ample Harvest</a>
                    </button></a>

                </button> <button><a className="App-link"
                    href="https://www.homelessshelterdirectory.org/"
                    target="_blank"
                    rel="noopener noreferrer">Homeless Shelter Directory</a>

                </button> <button><a className="App-link"
                    href="https://www.feedingamerica.org/find-your-local-foodbank"
                    target="_blank"
                    rel="noopener noreferrer">Find your local Food Bank</a>
                </button>




                <h3>   Legal Basics</h3>

                <p>Corporate donors are protected from liability under the Bill Emerson Good Samaritan Food Donation Act (PDF)(2 pp, 207 K, About PDF).</p>
                <p>Under this Act, as long as the donor has not acted with negligence or intentional misconduct, the company is not liable for damage incurred as the result of illness. Learn more from the University of Arkansas' Food Recovery – a legal guide (PDF)(12pp, 8.44MB). EXIT
                    </p>

                <h2>Safety Basics</h2>
                <p>Many non-perishable and unspoiled perishable foods can be donated to local food banks, soup kitchens, pantries, and shelters if the transaction is managed properly. </p>
                <p>Check with your local food bank or food rescue operation (soup kitchens, pantries, and shelters) to find out what items they will accept.</p>
                <p> Learn more about Food Safety Basics EXIT or contact your state or local health department for more information on how to safely donate food.
                        </p>
                <h2>     Tax Benefits</h2>
                <p>There are potential tax benefits for companies that donate food. See Harvard Food Law and Policy Clinic’s Tax Deduction for Food Donation, a Legal Guide EXIT for information on enhanced tax deductions available to businesses donating food.
                    </p>
            </div>

        </React.Fragment>

    );
};

export default About;