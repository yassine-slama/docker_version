import React, { useState, useEffect, useRef  } from 'react';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import { fetchProfile } from '../api/profile.js';
import { Toast } from 'primereact/toast';


const NewTeam = () => {

  const toast = useRef(null);


  const [teamData, setTeamData] = useState({
    teamname: '',
    founded: null,
    owner: '',
    league: '',
    budget: '',
    logo: '',
  });
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleInputChange = (field, value) => {
    setTeamData((prevData) => ({
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
          body: JSON.stringify(teamData),
        });

        if (!response.ok) {
            const errorData = await response.json(); // Assuming the error message is in JSON format
            // throw new Error(`${errorData.message}`);
            // {error && <div style={{ color: 'red' }}>{error}</div>}
            toast.current.show({severity:'error', summary: 'Failed !', detail:`${errorData.message}`, life: 2000});
        }

        console.log('Team created:', await response.json());
        toast.current.show({severity:'success', summary: 'Created !', detail:'Team Created Successfully', life: 3000});
        setTimeout(() => {
            router.push('/teams');
          }, 500);
        // Optionally, you can navigate to another page or display a success message
      }
    } catch (error) {
      console.error('Error creating team:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const legendTemplate = (
    <div className="flex align-items-center text-dark ">
      <span className="pi pi-user mr-2"></span>
      <span className="font-bold text-lg"> New Team</span>
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
            Teamname : &nbsp;
            <InputText
              placeholder="Team name"
              value={teamData.teamname}
              onChange={(e) => handleInputChange('teamname', e.target.value)}
            />
          </p>
          <Divider type="solid" />
          <p className="card m-0 font-bold  flex justify-content-center">
            Founded : &nbsp;
            <Calendar
                placeholder="Founded"
              value={teamData.founded}
              onChange={(e) => handleInputChange('founded', e.value)}
              showIcon
            />
          </p>
          <Divider type="solid" />
          <p className="card m-0 font-bold  flex justify-content-center">
            Owner : &nbsp;
            <InputText
              placeholder="Owner"
              value={teamData.owner}
              onChange={(e) => handleInputChange('owner', e.target.value)}
            />
          </p>
          <Divider type="solid" />
          <p className="card m-0 font-bold  flex justify-content-center">
            League : &nbsp;
            <InputText
              placeholder="League"
              value={teamData.league}
              onChange={(e) => handleInputChange('league', e.target.value)}
            />
          </p>
          <Divider type="solid" />
          <p className="card m-0 font-bold  flex justify-content-center">
            Budget : &nbsp;
            <InputText
              placeholder="Budget"
              value={teamData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
            />
          </p>
          <Divider type="solid" />
          <p className="card m-0 font-bold  flex justify-content-center">
            Logo : &nbsp;
            <InputText
              placeholder="Logo Path"
              value={teamData.logo}
              onChange={(e) => handleInputChange('logo', e.target.value)}
            />
          </p>
          <Divider type="solid" />
          <Button severity="success" label={loading ? 'Saving...' : 'Save'} onClick={handleSave} disabled={loading} />

        </Fieldset>
      </div>
    </div>
  );
};

export default NewTeam;
