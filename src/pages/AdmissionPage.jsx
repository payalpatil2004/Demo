import Header from "../componentes/Header/Header";


const AddmisionPage = () =>{
 return(
        <div>
            <Header/>
            <h1>Admissions at Vivekanand College</h1>
            <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community.<br></br> Our admission process is designed to be straightforward and accessible.</p>


               <p> Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>

            <h2>Eligibility Criteria for Undergraduate Programs</h2>
            <table>
                <tr>
                    <th>Program</th>
                    <th>Minimum Qualification</th>
                    <th>Required Subjects</th>
                    <th>Minimum Marks (%)</th>
                </tr>
                <tr> 
                    <td>B.Sc. Computer Science</td>
                    <td>10+2 (or equivalent)</td>
                    <td>Physics, Chemistry, Maths</td>
                    <td>50%</td>
                </tr>
                <tr>
                    <td>B.Com. Accounting & Finance</td>
                    <td>10+2 (or equivalent)</td>
                    <td>Commerce Stream</td>
                    <td>45%</td>
                </tr>
                <tr>
                    <td>B.A. English Literature</td>
                    <td>10+2 (or equivalent)</td>
                    <td>Any Stream</td>
                    <td>40%</td>
                </tr>

            </table>
                <h2>Application Process</h2>
            <ol>
                <li>Online Application: Fill out the application form available on our portal.</li>
                <li>Document Submission: Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                <li>Entrance Exam (if applicable):Appear for the college's entrance examination.</li>
                <li>Merit List & Interview: Check the merit list and attend the interview if shortlisted.</li>
                <li>Fee Payment: Complete the admission by paying the required fees.</li>
            </ol>

        </div>

        




 )




}
export default AddmisionPage;
