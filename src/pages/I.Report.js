import React, { useState, useContext, useEffect } from "react";
import Helmet from "react-helmet";

//context
import { GlobalContext } from "context/GlobalState";

//components
import AppBarWithBackButton from "components/AppBarWithBackButton";
import ReportChart from "components/common/ReportChart";
import { motion } from "framer-motion";

import { reportData } from '../utils/mockData';
import moment from "moment";

const Report = () => {
  const { historyPendanaan } = useContext(GlobalContext);
  const [mockMode, setMockMode] = useState('1');
  const [chartData, setChartData] = useState("");

  useEffect(() => {
    const groupedData = [];
    historyPendanaan.map((item) => {
      const month = moment(item.createdAt).format('MMMM');
      const year = moment(item.createdAt).format('YYYY');
      const danaAwal = +item.danaAwal || 0;
      const danaAkhir = +item.danaAkhir || 0;
      const totalDana = +item.totalDana || 0;
      const sortIndex = +`${moment(item.createdAt).get('M')}${moment(item.createdAt).get('year')}`;

      const index = groupedData.findIndex((obj) => obj.month === month && obj.year === year);
      if (index > -1) {
        groupedData[index].danaAwal += +danaAwal;
        groupedData[index].danaAkhir += +danaAkhir;
        groupedData[index].totalDana += +totalDana;
      } else {
        groupedData.push({
          month,
          year,
          danaAwal,
          danaAkhir,
          totalDana,
          sortIndex
        })
      }
      return 1;
    });

    const sortedData = groupedData.sort((a, b) => a.sortIndex - b.sortIndex);

    setChartData(sortedData);
  }, [historyPendanaan]);

  const handleChangeMockMode = (e) => {
    setMockMode(e.target.value)
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Report</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <AppBarWithBackButton title="Report" />

      <div className="lg:w-2/4 mx-auto w-full px-2">
        <select value={mockMode} onChange={handleChangeMockMode}>
          <option value="1">Mock Data</option>
          <option value="">Real Data</option>
        </select>
        <ReportChart data={!!mockMode ? reportData : chartData} />
      </div>
    </motion.div>
  );
};

export default Report;
