import React, { useState, useEffect, useRef  } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import { fetchProfile } from '../api/profile.js';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';

const NewStaff = () => {

  const toast = useRef(null);

  const [selectedGender, setSelectedGender] = useState(null);

  const genders = [
        { name: 'MALE', code: 'M' },
        { name: 'FEMALE', code: 'F' }
  ];

  const handleGenderChange = (e) => {
    console.log(e.value.name)
    setSelectedGender(e.value)
    handleInputChange('gender', e.value.name);
  };

  const [staffData, setStaffData] = useState({
    fullname: '',
    birthdate: null,
    nationality: '',
    gender: '',
    role: '',
    team_id: '',
    image: '',
  });
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

//   const handleTeamChange = (e) => {
//     // Handle team selection here
//     // You might want to set the selected team ID in playerData
//     handleInputChange('team_id', e.value); // assuming e.value contains the selected team ID
//   };

  const handleInputChange = (field, value) => {
    setStaffData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

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

  const handleSave = async () => {
    try {
      if (profile) {
        setLoading(true);
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/staff/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
          body: JSON.stringify(staffData),
        });

        if (!response.ok) {
            const errorData = await response.json(); // Assuming the error message is in JSON format
            // throw new Error(`${errorData.message}`);
            // {error && <div style={{ color: 'red' }}>{error}</div>}
            toast.current.show({severity:'error', summary: 'Failed !', detail:`${errorData.message}`, life: 2000});
        }

        console.log('Staff created:', await response.json());
        toast.current.show({severity:'success', summary: 'Created !', detail:'Staff Created Successfully', life: 3000});
        setTimeout(() => {
            router.push('/staff');
          }, 500);
        // Optionally, you can navigate to another page or display a success message
      }
    } catch (error) {
      console.error('Error creating Staff :', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        if (profile) {
          setLoading(true);
          const token = localStorage.getItem("token");
          const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams/get-id-team`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`,
            },
            // body should not be included in a GET request
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          // Assuming the data is an array of teams with _id and teamname properties
          setTeams(data);
        }
      } catch (error) {
        console.error('Error fetching teams:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [profile]);




  const handleTeamChange = (e) => {
    console.log(e.value._id);
    console.log(e.value.teamname);
    setSelectedTeam(e.value);
    handleInputChange('team_id', e.value._id);
  };


  const legendTemplate = (
    <div className="flex align-items-center text-dark ">
      <span className="pi pi-user mr-2"></span>
      <span className="font-bold text-lg"> New Staff</span>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <br></br>
      <div className="card flex justify-content-center">
            <Toast ref={toast} />
      </div>
      <div
        className="card flex justify-content-center"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Fieldset legend={legendTemplate}>
            <p className="card m-0 font-bold  flex justify-content-center">
                Fullname: &nbsp;
            </p>
            <InputText
              placeholder="FullName"
              value={staffData.fullname}
              onChange={(e) => handleInputChange('fullname', e.target.value)}
              className="w-full md:w-14rem" required
            />

          <Divider type="solid" />
            <p className="card m-0 font-bold  flex justify-content-center">
                Birthdate : &nbsp;
            </p>
            <Calendar
              placeholder="Birthdate"
              value={staffData.birthdate}
              onChange={(e) => handleInputChange('birthdate', e.value)}
              showIcon
              className="w-full md:w-14rem" required
            />

          <Divider type="solid" />
            <p className="card m-0 font-bold  flex justify-content-center">
                Nationality : &nbsp;
            </p>
            <InputText
              placeholder="Nationality"
              value={staffData.nationality}
              onChange={(e) => handleInputChange('nationality', e.target.value)}
              className="w-full md:w-14rem" required
            />

          <Divider type="solid" />
            <p className="card m-0 font-bold  flex justify-content-center">
            Gender: &nbsp;
            </p>
            <Dropdown
                value={selectedGender}
                onChange={handleGenderChange}
                options={genders}
                optionLabel="name"
                placeholder="Select Gender"
                className="w-full md:w-14rem" required
            />

          <Divider type="solid" />

            <p className="card m-0 font-bold  flex justify-content-center">
            Role : &nbsp;
            </p>
            <InputText
              placeholder="Role"
              value={staffData.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              className="w-full md:w-14rem" required
            />

          <Divider type="solid" />

            <p className="card m-0 font-bold  flex justify-content-center">
                Team : &nbsp;
            </p>
            <Dropdown
                value={selectedTeam}
                onChange={handleTeamChange}
                options={teams}
                optionLabel="teamname"
                placeholder="Select Team"
                className="w-full md:w-14rem" required
            />

           <Divider type="solid" />
            <p className="card m-0 font-bold  flex justify-content-center">
                image : &nbsp;
            </p>
            <InputText
              placeholder="Picture Path"
              value={staffData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              className="w-full md:w-14rem" required
            />

          <Divider type="solid" />
          <Button severity="success" label={loading ? 'Saving...' : 'Save'} onClick={handleSave} disabled={loading} />

        </Fieldset>
      </div>
    </div>
  );
};

export default NewStaff;
