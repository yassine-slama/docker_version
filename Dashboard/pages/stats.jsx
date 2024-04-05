import React, { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router';
import { fetchProfile } from './api/profile.js';
import { Chart } from 'primereact/chart';


export default function Stats() {
    const router = useRouter();
    const [profile, setProfile] = useState(null);
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const [chartData1, setChartData1] = useState({});
    const [chartOptions1, setChartOptions1] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        fetchProfile(token)
          .then((data) => setProfile(data))
          .catch((err) => {
            console.error(err);
            router.push('/login');
          });
      } else {
        router.push('/login');
      }
    }, [router]);


    useEffect(() => {
        const fetchStats = async () => {
          if (profile) {
            const token = localStorage.getItem('token');
            try {
              const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/stats/get-stats`, {
                headers: {
                  Authorization: `${token}`,
                },
              });
              const dataSet = await res.json();
              console.log(dataSet);
              const data = {

                labels: ['Users', 'Teams', 'Players', 'Staff'],
                datasets: [
                    {
                        label: 'N°',
                        data: [dataSet.userCount, dataSet.teamCount, dataSet.playerCount, dataSet.staffCount],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                          ],
                          borderColor: [
                            'rgb(255, 159, 64)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)'
                          ],
                          borderWidth: 1
                    }
                ]
            };
            const options = {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            };


            setChartOptions(options);
            setChartData(data)

            } catch (error) {
              console.error('Error fetching stats:', error);
            }
          }
        };


        const fetchTeamsStats = async () => {
            if (profile) {
              const token = localStorage.getItem('token');
              try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/teams/get-budgets`, {
                  headers: {
                    Authorization: `${token}`,
                  },
                });
                const teamSet = await res.json();
                console.log(teamSet);

                 // Extract team names and budgets from the response
                const labels = teamSet.map((team) => team.teamname);
                const budgets = teamSet.map((team) => team.budget);

                const data = {

                labels: labels,
                datasets: [
                      {
                          label: 'Budget',
                          data: budgets,
                          backgroundColor: [
                              'rgba(255, 159, 64, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(153, 102, 255, 0.2)'
                            ],
                            borderColor: [
                              'rgb(255, 159, 64)',
                              'rgb(75, 192, 192)',
                              'rgb(54, 162, 235)',
                              'rgb(153, 102, 255)'
                            ],
                            borderWidth: 1
                      }
                  ]
              };
              const options = {
                  scales: {
                      y: {
                          beginAtZero: true
                      }
                  }
              };


              setChartOptions1(options);
              setChartData1(data)
              setLoading(false);
              } catch (error) {
                console.error('Error fetching stats:', error);
              }
            }
          };

        fetchStats();
        fetchTeamsStats();
      }, [profile]);





    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between px-4 pt-4'>
          <h1 className='font-bold text-3xl'>Stats</h1>
        </div>
        <br />

        <div className='card'>
          <Chart type='bar' data={chartData} options={chartOptions} />
          <br></br><br></br><br></br>
          <Chart type='bar' data={chartData1} options={chartOptions1} />
        </div>
      </div>
    );
  }
