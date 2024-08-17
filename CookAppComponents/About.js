import { Table , Timeline } from "antd"
import { Color } from "antd/es/color-picker"
import { children } from "react"

const AboutUs = () => {

  let timelinedata = [
    {
      label: "Our First Order: 2010",
      children: "We Served our First Recipe to America",
      color: "green"
    },
    {
      label: "Expanded to Europe: 2012",
      children: "We introduced our recipes to the European market, starting with France.",
      color: "green"
    },
    {
      label: "Launch of Mobile App: 2014",
      children: "Our customers can now order their favorite meals directly from our mobile app.",
      color: "green"
    },
    {
      label: "1000th Order: 2015",
      children: "Celebrated our 1000th order with a special discount for all our customers.",
      color: "green"
    },
    {
      label: "Global Expansion: 2017",
      children: "We expanded our services to Asia and Australia, bringing our recipes to a global audience.",
      color: "green"
    },
    {
      label: "Introduction of Vegan Menu: 2019",
      children: "We launched a new vegan menu to cater to the growing demand for plant-based meals.",
      color: "green"
    },
    {
      label: "Partnership with Local Farmers: 2021",
      children: "Partnered with local farmers to provide fresh, organic ingredients in all our meals.",
      color: "green"
    }
  ];
  
  let data = [
    { key: '1', name: "We Serve at Your Door Steps" },
    { key: '2', name: "Eat Healthy , Become Wealthy" },
    { key: '3', name: "Home Made Receipes with Master Chefs" },
    { key: '4', name: "Cook Up A Storm" }
  ]

  const columns = [
    {
      title: 'Eager to know more About us ?',
      dataIndex: 'name',
      key: 'name',
    },
  ]


  return (
    <div id="AboutUs">
      <Table style={{width:250}} dataSource={data} columns={columns}></Table>
      <Timeline mode="left"  items={timelinedata}/>
    </div>
  )
}

export default AboutUs
