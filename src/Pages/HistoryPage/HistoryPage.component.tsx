import { useContext } from "react";
import InfoPanel from "../../Components/InfoPanel/InfoPanel.component";
import { UserDataContext } from "../../Context/userData.context";

const HistoryPage = () => {
    const { searchHistoryData } = useContext(UserDataContext);

    return (
        <div>
            {searchHistoryData.map((el) => (
                <InfoPanel dataToDisplay={el} key={el.id} />
            ))}
        </div>
    );
};

export default HistoryPage;
