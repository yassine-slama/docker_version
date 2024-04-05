import { useRouter } from "next/router";

import React, { useEffect, useRef, useState } from "react";

import { fetchProfile } from '../api/profile.js';
import { Toast } from 'primereact/toast';
import { Fieldset } from 'primereact/fieldset';
import { Divider } from 'primereact/divider';

import { Rating } from "primereact/rating";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";



const EditTeam = () => {

    const toast = useRef(null);

    const router = useRouter();
    const { edit } = router.query;
    console.log("edit ID = " + edit);

    const [profile, setProfile] = useState(null);
    const [editData, setEdit] = useState([]);
    const [formData, setFormData] = useState({
        teamname: '',
        founded: '',
        owner: '',
        league: '',
        budget: '',
        logo: '',
    });

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
          fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams/get-one/${edit}`, {
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
                teamname: data[0]?.teamname || '',
                founded: data[0]?.founded || '',
                owner: data[0]?.owner || '',
                league: data[0]?.league || '',
                budget: data[0]?.budget || '',
                logo: data[0]?.logo || '',
              });
            })
            .catch((err) => console.log(err));
        }

        return () => {
            setEdit([]);
        };
      }, [profile, edit]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams/update-one/${edit}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((updatedData) => {
            console.log('Team updated:', updatedData);
            toast.current.show({severity:'success', summary: 'Updated !', detail:'Team Updated Successfully', life: 3000});
            setTimeout(() => {
                router.push('/teams');
            }, 500);
          })
          .catch((error) => {
            console.error('Error updating team:', error);
            toast.current.show({severity:'error', summary: 'Failed !', detail:`${errorData.message}`, life: 2000});
          });
      };

      const legendTemplate = (
        <div className="flex align-items-center text-dark">
          <span className="pi pi-flag mr-2"></span>
          <span className="font-bold text-lg"> &nbsp; {editData[0]?.teamname}</span>
        </div>
      );

      return (
        <div className="bg-gray-100 min-h-screen">
          <br /> <Toast ref={toast} />
          <div className="card text-center " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={handleSubmit}>
              <Fieldset legend={legendTemplate}>
                {/* Editable Fields */}
                <p className="card m-0 font-bold  flex justify-content-center">
                    Teamname : &nbsp;
                    <InputText
                        placeholder="Team name"
                        value={formData.teamname}
                        onChange={handleInputChange}
                        name="teamname" required
                    />
                </p>
                <Divider type="solid" />
                <p className="card m-0 font-bold  flex justify-content-center">
                    Founded : &nbsp;
                    <InputText
                        placeholder="Founded"
                        value={formData.founded}
                        onChange={handleInputChange}
                        name="founded" required
                    />
                </p>
                <Divider type="solid" />
                <p className="card m-0 font-bold  flex justify-content-center">
                Owner : &nbsp;
                    <InputText
                        placeholder="Owner"
                        value={formData.owner}
                        onChange={handleInputChange}
                        name="owner" required
                    />
                </p>
                <Divider type="solid" />
                <p className="card m-0 font-bold  flex justify-content-center">
                League : &nbsp;
                    <InputText
                        placeholder="League"
                        value={formData.league}
                        onChange={handleInputChange}
                        name="league" required
                    />
                </p>
                <Divider type="solid" />
                <p className="card m-0 font-bold  flex justify-content-center">
                Budget : &nbsp;
                    <InputText
                        placeholder="Budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        name="budget" required
                    />
                </p>
                <Divider type="solid" />
                <p className="card m-0 font-bold  flex justify-content-center">
                Logo : &nbsp;
                    <InputText
                        placeholder="Logo Path"
                        value={formData.logo}
                        onChange={handleInputChange}
                        name="logo" required
                    />
                </p>
                <Divider type="solid" />

                <Button severity="success" label={"Save"} type={"submit"}/>

              </Fieldset>
            </form>
          </div>
        </div>
      );
    };

    export default EditTeam;
