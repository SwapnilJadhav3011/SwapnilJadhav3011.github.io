import axios from 'axios';

const EMPLOYEE_API_BASE_URL ="http://localhost:8081/api/v1/employees";
 
class Employeeservice {
    getAllEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    findByEmployeeId(empid){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+empid)
    }
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee).then(response=>{
            if (response.data!=null) {
                alert("Employee Created Succesfully!")
            }
            else{
                alert("Employee cannot be created!!");
            }
        })
    }
}
/* We are not exporting the class but the object of this class 
so we directly use object of this class inside a component*/
export default new Employeeservice()
