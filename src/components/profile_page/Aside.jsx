import SideContent from "./SideContent";
import { fetchData } from "../../assats/js";
import { useState, useEffect } from "react";
import Peopleviewed from "./Peopleviewed";

const Aside = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getData = async () => {
      let dataFromEndpoint = await fetchData("", "GET");

      let num = Math.floor(Math.random() * 5);
      let data = [];

      for (let i = 0; i < 5; i++) {
        data.push(dataFromEndpoint[num + i]);
      }

      setUserData(data);
      setIsLoading(false);

      console.log("Aside ---------------------");
      console.log(userData);
    };
    getData();
    console.log(userData);
  }, []);

  return (
		<div class="sideContent_big">
			<SideContent />
			<Peopleviewed
				title={'People also viewed'}
				isLoading={isLoading}
				userData={userData}
			/>
			<SideContent />
			<SideContent />
			<SideContent />
			<SideContent />
			<SideContent />
		</div>
	);
};
export default Aside;
