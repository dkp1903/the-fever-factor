import React from 'react';
import p from 'papaparse';
import InfoBox from '../info-box/info-box.component';
import ChartDisplay from '../chart-display/chart-display.component';

import './content.styles.css';

class Content extends React.Component { 
    constructor(){
        super();
        this.state = {
            chartData2: {},
            chartData3: {},
            chartData4: {},
            chartData5: {},
            chartData6: {},
            chartData7: {},
            chartData8: {},
            rawMatch: {},
            rawPlayer: {},
            rawBallByBall: {},
            dataForChart: {},
            rawData: {}
            /*rawSeason: {},
            rawTeam: {},
            rawPlayerMatch: {},*/
        };
    }

    componentDidMount(){
        this.getChartData();
    }

    // Converting CSV file to JSON data
    getChartData = () => {
        
        p.parse('./ipl-csv-dataset/matches.csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: this.getData
        });
    }

    // Saving JSON data to state and calling associated functions to process data
   
    getData = (result) => {
        this.setState({rawData: result});
        this.firstChart();
        this.dataForChart1();
        this.dataForChart2();
        this.dataForChart3();
        this.dataForChart7();
        this.dataForInfoBox1and2();
        this.dataForInfoBox3and4();
        console.log('This works');  
    }

    firstChart = () => {
        let superovers = 0;

        if(Object.keys(this.state.rawData).length !== 0){
            // Number of Matches
            this.setState({
                data1: this.state.rawData.data.length - 1
            });

            for(var i = 0; i < this.state.rawData.data.length; i++){
                console.log(this.state.rawData.data[i].result);
                if(this.state.rawData.data[i].result !== 'normal'){
                    superovers++;
                }
            }

            this.setState({ data2: superovers });
        }
    }
    
    dataForChart1 = () => {
        // Bat or Field Decision
        
        
        let wins = {};
        if(Object.keys(this.state.rawData).length !== 0){
            this.state.rawData.data.forEach(element => {
                if(wins[element.team1] !== undefined) {
                   wins[element.team1] += 1;
                } else {
                    wins[element.team1] = 1;
                }
            });
            

            this.setState({
                chartData1: {
                    labels: [...Object.keys(wins)],
                    datasets: [
                        {
                            label: 'ABCD',
                            data: [...Object.values(wins)],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(245, 135, 31, 0.5)',
                                'rgba(128, 203, 174, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)'
                            ],
                            borderColor: [
                                'rgba(58, 55, 52,1.0)',
                                'rgba(9, 168, 250.0)',
                                'rgba(255, 193, 7, 1)',
                                'rgba(255, 87, 34,1.0)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart2 = () => {
        // Toss Decision
        let winWay = {};
        
        if(Object.keys(this.state.rawData).length !== 0){
            this.state.rawData.data.forEach(element => 
            {
                if (element.winner === element.toss_winner)
                {
                    if(winWay[element.toss_decision] !== undefined) {
                        winWay[element.toss_decision] += 1;
                    } else {
                        winWay[element.toss_decision] = 1;
                    }
                }
                else
                {
                    if(winWay[element.toss_decision] !== undefined) 
                    {
                        if(element.toss_decision === 'field')
                            winWay['bat'] += 1;
                        else
                            winWay['field']++;
                    } 
                    else 
                    {
                        if(element.toss_decision === 'field')
                            winWay['bat'] = 1;
                        else
                            winWay['field'] = 1;
                    }
                }
            });

            this.setState({
                chartData2: {
                    labels: [...Object.keys(winWay)],
                    datasets: [
                        {
                            label: 'Field or bat',
                            data: [...Object.values(winWay)],
                            backgroundColor: [
                                'rgba(33, 150, 243,0.5)',
                                'rgba(76, 175, 80,0.5)',
                                
                            ],
                            borderColor: [
                                'rgba(33, 150, 243,1.0)',
                                'rgba(76, 175, 80,1.0)',
                                'rgba(244, 67, 54,1.0)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    dataForChart3 = () => {
        // Venue
        let winType = {};
        if(Object.keys(this.state.rawData).length !== 0){
            this.state.rawData.data.forEach(element => {
                if(winType[element.venue] !== undefined) {
                    winType[element.venue] += 1;
                } else {
                    winType[element.venue] = 1;
                }
            });

            this.setState({
                chartData3: {
                    labels: [...Object.keys(winType)],
                    datasets: [
                        {
                            label: 'Venue',
                            data: [...Object.values(winType)],
                            backgroundColor: [
                                'rgba(58, 55, 52,0.5)',
                                'rgba(9, 168, 250,0.5)',
                                'rgba(255, 193, 7, 0.5)',
                                'rgba(255, 87, 34,0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(245, 135, 31, 0.5)',
                                'rgba(128, 203, 174, 0.5)',
                                'rgba(244, 67, 54, 0.5)',
                                'rgba(9, 98, 234, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(245, 135, 31, 0.5)',
                                'rgba(128, 203, 174, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(245, 135, 31, 0.5)',
                                'rgba(128, 203, 174, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)'
                            ],
                            borderColor: [
                                'rgba(58, 55, 52,1.0)',
                                'rgba(9, 168, 250.0)',
                                'rgba(255, 193, 7, 1)',
                                'rgba(255, 87, 34,1.0)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

   
    dataForChart7 = () => {
        // Season
        let seasons = {};

        if(Object.keys(this.state.rawData).length !== 0) {
            this.state.rawData.data.forEach(element => {
                if(seasons[element.season] !== undefined) {
                    seasons[element.season]++;
                } else
                    seasons[element.season] = 1;
            });

            

            this.setState({
                chartData7: {
                    labels: [...Object.keys(seasons)],
                    datasets: [
                        {
                            label: 'Average Runs Every Over',
                            data: [...Object.values(seasons)],
                            backgroundColor: [
                                'rgba(103, 58, 183, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(245, 135, 31, 0.5)',
                                'rgba(128, 203, 174, 0.5)',
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                            ],
                            borderColor: [
                                'rgba(103, 58, 183,1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            });
            this.forceUpdate();
        }
    }

    

    dataForInfoBox1and2 = () => {        
        // Number of Superovers
        let ties = 0;

        if(Object.keys(this.state.rawData).length !== 0){
            // Number of Matches
            this.setState({
                infoBox1: this.state.rawData.data.length - 1
            });

            for(var i = 0; i < this.state.rawData.data.length; i++){
                if(this.state.rawData.data[i].result === 'tie'){
                    ties++;
                }
            }

            this.setState({ infoBox2: ties });
        }
    }

    dataForInfoBox3and4 = () => {
        // Number of Fours
        let field = 0;
        let bat = 0;
        if(Object.keys(this.state.rawData).length !== 0){
            this.state.rawData.data.forEach(element => {
                if(element.toss_winner === element.winner) 
                {
                    if (element.toss_decision === 'field')
                        field++;
                    else
                        bat++;
                }
                else
                {
                    if (element.toss_decision === 'field')
                        bat++;
                    else
                        field++;
                }
            });
            this.setState({ infoBox3: field, infoBox4: bat });
        }
        this.forceUpdate();
    }

    render() {
        /*==== Calculates current width of browser ====*/
        let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0];

        return (
            <div className='content-container'>
                <div className='title-container'>
                    <h1><span className='bold'>The greatest show on Earth</span> - IPL</h1>
                    <h2><span className='bold'>From Jumping Japaak to</span> - Ye das saal aapke naam</h2>
                    <h2><span className='bold'>Here's some spice</span></h2>

                </div>
                <div className='infobox-container'>
                    <InfoBox data={this.state.data1} title='Total Matches' icon={<i className="fas fa-cricket fa-4x"></i>} text='Matches played till now.' />
                    <InfoBox data={this.state.data2} title='Total Ties' icon={<i className="fas fa-cricket fa-4x"></i>} text='Number of ties' />
                    <InfoBox data={this.state.infoBox3} title='Field first wins' icon={<i className="fas fa-cricket fa-4x"></i>} text='Number of wins with field first'  />
                    <InfoBox data={this.state.infoBox4} title='Bat first wins' icon={<i className="fas fa-cricket fa-4x"></i>} text='Number of wins with bat first'  />

                </div>
                <div className='graph-container'>
                    <ChartDisplay 
                        selectChart='pie' 
                        chartData={this.state.chartData7}   
                        titleText='Yearwise distribution' 
                        selectLabel={true} 
                        selectLabelText='Year' 
                    />
                    
                    <ChartDisplay 
                        selectChart='horizontalBar' 
                        displayLegend={false}
                        chartData={this.state.chartData1} 
                        titleText='Wins' 
                    />
                    <ChartDisplay 
                        selectChart='horizontalBar' 
                        displayLegend={false} 
                        chartData={this.state.chartData3} 
                        titleText='Result Type' 
                    />
                    <ChartDisplay 
                        selectChart='pie' 
                        chartData={this.state.chartData2} 
                        titleText='Wins by bat/field first' 
                    />
                   
                    
                </div>
            </div>
        )
    }
}

export default Content;