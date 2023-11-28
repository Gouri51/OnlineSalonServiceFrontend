import { useState } from "react";

function Employees(props) {

    const [searchTerm, setSearchTerm] = useState("");

    const empList = props.data;
    console.log(empList);
    console.log(empList.length);


    const myEmpList = (
        <>
            <h1>Serach Employee:</h1>


            <input icon = "search" type="text" value={searchTerm} name="searchTerm" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search Employee..." />

            {empList.length === 0 && <h3 id="test10">No employees found </h3>}
            {
                empList.length > 0 &&
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empList
                                .filter(
                                    (emp) => {
                                      // Logic to search by name
                                        return  emp.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
                                    // Logic to search entire employee record.
                                    //   return  Object.values(emp).join(' ').toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
                                    }
                                )
                                .map(
                                    (emp, index) => {

                                        return (
                                            <tr key={index}>
                                                <td>{emp.id}</td>
                                                <td>{emp.name}</td>
                                                <td>{emp.email}</td>
                                            </tr>
                                        );

                                    }


                                )

                        }

                    </tbody>
                </table>
            }
        </>
    );
    return (
        <>
            {myEmpList}
        </>
    );
}

export default Employees;