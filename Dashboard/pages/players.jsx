import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image.js";
import { fetchProfile } from './api/profile.js';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';

const Players = () => {
  const toast = useRef(null);
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [PlayersList, setPlayersList] = useState([]);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },

  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [loading, setLoading] = useState(true);
  const onGlobalFilterChange = (e) => {
      const value = e.target.value;
      let _filters = { ...filters };

      _filters['global'].value = value;

      setFilters(_filters);
      setGlobalFilterValue(value);
  };

  const imageBodyTemplate = (player) => {
    return (
      <div className="flex align-items-center gap-2">
          <Image src={`/${player.image}`} alt={player.image} width={40} height={40} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="shadow-4" />
          <span>{player.fullname}</span>
      </div>
  );

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

  useEffect(() => {

    const fetchPlayers = async () => {
      if (profile) {

        const token = localStorage.getItem("token");
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/players/get-all`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const data = await res.json();
        setPlayersList(data);
        setLoading(false);

      }
    };
    fetchPlayers().catch((err) => console.log(err));

  }, [profile]);

  const handleDelete = async (rowData) => {
    const playerIdToDelete = rowData._id; // Assuming id is the identifier for the team

    const confirmDeletion = window.confirm(`Are you sure you want to delete the Player ${rowData.fullname}?`);

    if (!confirmDeletion) {
      // User canceled the deletion
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/players/destroy/${playerIdToDelete}`, {
        method: 'DELETE',
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.ok) {
        console.log(`Player with ID ${playerIdToDelete} deleted successfully.`);
        toast.current.show({severity:'error', summary: 'DELETED !', detail:`Player ${rowData.fullname} deleted successfully.`, life: 2000});
        setTimeout(() => {
          router.push('/players');
        }, 500);
        // Optionally, update the state or refetch the teams list after deletion
      } else {
        // Handle the case where deletion was not successful
        const errorData = await response.json(); // Assuming the error message is in JSON format
        toast.current.show({severity:'error', summary: 'Failed !', detail:`${errorData.message}`, life: 2000});
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error(`Error deleting Player with ID ${playerIdToDelete}:`, error.message);
    }
  };

  const renderHeader = () => {
      return (
          <div className="flex justify-content-end" style={{display: 'flex', justifyContent: 'right', alignItems: 'right'  }}>
              <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
              </span>
          </div>
      );
  };
  const header = renderHeader();

  return (
    <div className='bg-gray-100 min-h-screen'>
          <div className='flex justify-between px-4 pt-4'>
              <h1 className="font-bold text-3xl">List of Players</h1>
              <Button severity="sucess" label="New" className="p-button-success" onClick={() => router.push(`/player/newPlayer`)} />
          </div>
          <br></br>
          <div className="card flex justify-content-center">
            <Toast ref={toast} />
          </div>

          <div className="card">
            <DataTable value={PlayersList} paginator sortField="fonction" sortOrder={1}  rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
            dataKey="id" filters={filters}  loading={loading}
            globalFilterFields={['nationality','age','gender', 'number', 'position', 'birthdate', '_id']} header={header} emptyMessage="ELEMENT NOT FOUND.">

               <Column header="Name" body={imageBodyTemplate} style={{ width: '14%', textAlign: 'center' }} />
                {/* <Column field="logo" header="Logo" sortable  style={{ width: '14%', textAlign: 'center' }}></Column> */}
                <Column field="nationality" header="Nationality" sortable  style={{ width: '14%', textAlign: 'center' }}></Column>
                <Column field="age" header="Age" sortable  style={{ width: '14%', textAlign: 'center' }}></Column>
                <Column field="gender" header="Gender" sortable  style={{ width: '14%', textAlign: 'center' }}></Column>
                <Column field="number" header="N°" sortable  style={{ width: '14%', textAlign: 'center' }}></Column>
                <Column field="position" header="Position" sortable  style={{ width: '14%', textAlign: 'center' }}></Column>
                <Column
                  field="birthdate"
                  header="Birthdate"
                  sortable
                  style={{ width: '14%', textAlign: 'center' }}
                  body={(rowData) =>
                    rowData.birthdate ? (
                      new Date(rowData.birthdate).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        hour12: false,
                        })
                    ) : (
                      <span style={{ color: 'red' }}>Not available</span>
                    )
                  }
                />

                <Column
                  field="_id"
                  header="Action"
                  sortable
                  style={{ width: '14%', textAlign: 'center' }}
                  body={(rowData) => (
                    <div className="card flex justify-content-center">
                      <Button
                        severity="error"
                        label="Del"
                        className="p-button-danger"
                        onClick={() => handleDelete(rowData)}
                      /> &nbsp;
                      <Button
                        severity="warning"
                        label="Edit"
                        className="p-button-warning"
                        onClick={() => router.push(`/player/${rowData._id}`)}
                      />
                    </div>
                  )}
                />
            </DataTable>
            <div className="card flex justify-content-center">

            </div>
          </div>


    </div>
  );
};

export default Players;
