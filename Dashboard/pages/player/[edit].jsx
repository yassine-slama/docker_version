import { useRouter } from "next/router";

import React, { useEffect, useRef, useState } from "react";
import { Calendar } from 'primereact/calendar';
import { fetchProfile } from '../api/profile.js';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';
import { Toast } from 'primereact/toast';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";



const EditPlayer = () => {

    const toast = useRef(null);

    const router = useRouter();
    const { edit } = router.query;
    console.log("edit Player ID = " + edit);
    const [teams, setTeams] = useState([]);
    const [profile, setProfile] = useState(null);
    const [editData, setEdit] = useState([]);

    const [formData, setFormData] = useState({
        fullname: '',
        age: '',
        birthdate: null,
        nationality: '',
        gender: '',
        number: '',
        position: '',
        team_id: '',
        image: '',
    });

    const [selectedGender, setSelectedGender] = useState(formData.gender);

    const [selectedTeam, setSelectedTeam] = useState(formData.team_id);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        fetchProfile(token)
          .then(data => setProfile(data))
          .catch(err => {
            console.error(err);
            router.push("/login");
          });
      } else {
        router.push("/login");
      }
    }, [router]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (profile && edit) {
          fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/players/get-one/${edit}`, {
            headers: {
              Authorization: `${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (!Array.isArray(data)) {
                data = [data];
              }
              setEdit(data);
              setFormData({
                fullname: data[0]?.fullname || '',
                birthdate: data[0]?.birthdate || '',
                nationality: data[0]?.nationality || '',
                gender: data[0]?.gender || '',
                number: data[0]?.number || '',
                position: data[0]?.position || '',
                team_id: data[0]?.team_id || '',
                image: data[0]?.image || '',
              });
            })
            .catch((err) => console.log(err));
        }

        return () => {
            setEdit([]);
        };
      }, [profile, edit]);

      const handleInputChange = (name, value) => {
        // Check if the value is an object and has a 'target' property
        if (typeof value === 'object' && value.hasOwnProperty('target')) {
          // Extract the 'target' property from the object
          value = value.target.value;
        }

        // Update the state with the value
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleNumberChange = (name, value) => {
        // Check if the value is an object and has a 'value' property
        if (typeof value === 'object' && value.hasOwnProperty('value')) {
          // Extract the 'value' property from the object
          value = value.value;
        }

        // Check if the value is a valid number
        const parsedValue = parseFloat(value);

        // Check if the parsedValue is a number and not NaN
        if (!isNaN(parsedValue)) {
          // Update the state with the valid number
          setFormData((prevData) => ({ ...prevData, [name]: parsedValue }));
        } else {
          // Handle the case where the value is not a valid number
          console.error(`Invalid number for ${name}: ${value}`);
        }
      };
// // ##################################################################################################################################
      const fetchTeams = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams/get-id-team`);
        const data = await response.json();
        console.log(data);
        return data;
      };




      useEffect(() => {
        // Fetch teams when the component mounts
        const getTeams = async () => {
          try {
            const teamsData = await fetchTeams();
            console.log(teamsData);
            setTeams(teamsData || []); // Use an empty array as a default value
          } catch (error) {
            console.error('Error fetching teams:', error);
            setTeams([]); // Set teams to an empty array in case of an error
          }
        };

        getTeams();
      }, []);

      useEffect(() => {
        // Update selectedTeam whenever formData.team_id changes
        setSelectedTeam(formData.team_id);
      }, [formData.team_id]);

      useEffect(() => {
        // Update selectedTeam whenever formData.team_id changes
        setSelectedGender(formData.gender);
      }, [formData.gender]);

// // ##################################################################################################################################

      const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/players/update-one/${edit}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((updatedData) => {
            console.log('Player updated:', updatedData);
            toast.current.show({severity:'success', summary: 'Updated !', detail:'Player Updated Successfully', life: 3000});
            setTimeout(() => {
                router.push('/players');
            }, 500);
          })
          .catch((error) => {
            console.error('Error updating Player:', error);
            toast.current.show({severity:'error', summary: 'Failed !', detail:`${errorData.message}`, life: 2000});
          });
      };

      const legendTemplate = (
        <div className="flex align-items-center text-dark">
          <span className="pi pi-user-edit mr-2"></span>
          <span className="font-bold text-lg"> &nbsp; {editData[0]?.fullname}</span>
        </div>
      );

      return (
        <div className="bg-gray-100 min-h-screen">
          <br /> <Toast ref={toast} />
          <div className="card text-center " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <form onSubmit={handleSubmit}>
              <Fieldset legend={legendTemplate}>
                <p className="card m-0 font-bold  flex justify-content-center">
                    Fullname : &nbsp;
                </p>
                    <InputText
                        placeholder="Fullname"
                        value={formData.fullname}
                        onChange={(e) => handleInputChange('fullname', e.target.value)}
                        name="fullname" required
                        className="w-full md:w-14rem"
                    />

                <Divider type="solid" />
                <p className="card m-0 font-bold  flex justify-content-center">
                Birthdate : &nbsp;
                {new Date(formData.birthdate).toLocaleString('en-US', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        hour12: false,
                })}
                </p>
                    <Calendar
                    placeholder="Birthdate"
                    value={formData.birthdate}
                    onChange={(e) => handleInputChange('birthdate', e.target.value)}
                    name="birthdate"
                    showIcon
                    className="w-full md:w-14rem"
                    />
                <Divider type="solid" />
                <p className="card m-0 font-bold  flex justify-content-center">
                Nationality : &nbsp;
                </p>
                    <InputText
                        placeholder="Nationality"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange('nationality', e.target.value)}
                        name="nationality" required
                        className="w-full md:w-14rem"
                    />

                <Divider type="solid" />
                <p className="card m-0 font-bold  flex justify-content-center">
                Number : &nbsp;
                </p>
                <InputNumber
                    placeholder="Number"
                    value={formData.number}
                    onChange={(value) => handleNumberChange('number', value)}
                    name="number"
                    required
                    min={1}
                    max={99}
                    className="w-full md:w-14rem"
                />

                <Divider type="solid" />
                <p className="card m-0 font-bold  flex justify-content-center">
                Position : &nbsp;
                </p>
                    <InputText
                        placeholder="Position"
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        name="position" required
                        className="w-full md:w-14rem"
                    />

                <Divider type="solid" />
                <p className="card m-0 font-bold flex justify-content-center">
                    Team:
                </p>
                <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedTeam}
                    onChange={(e) => handleInputChange('team_id', e.target.value)}
                    className="w-full md:w-14rem"
                    required
                    >
                    <option value="">Select Team</option>
                    {teams.map((team) => (
                        <option key={team._id} value={team._id}>
                        {team.teamname}
                        </option>
                    ))}
                    </select>

                <Divider type="solid" />
                  <p className="card m-0 font-bold flex justify-content-center">
                    Gender:
                  </p>
                  <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedGender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full md:w-14rem"
                    required
                  >
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                <Divider type="solid" />

                <p className="card m-0 font-bold  flex justify-content-center">
                Image : &nbsp;
                </p>
                    <InputText
                        placeholder="image"
                        value={formData.image}
                        onChange={(e) => handleInputChange('image', e.target.value)}
                        name="image" required
                        className="w-full md:w-14rem"
                    />

                <Divider type="solid" />


                <Button severity="success" label={"Save"} type={"submit"}/>

              </Fieldset>
            </form>
          </div>
        </div>
      );
    };

    export default EditPlayer;
