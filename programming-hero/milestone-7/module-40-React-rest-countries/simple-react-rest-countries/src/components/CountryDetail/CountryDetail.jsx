import CountryData from "../CountryData/CountryData";

export default function CountryDetail(props) {

  const {country, handleVisitedCountry, handleVisitedFlags} = props;

  return (
    <div>
        <h4>Country Detail</h4>
        <hr />
        {/* <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
        ></CountryData> */}
        {/* another way to pass props using spread operator */}
        <CountryData {...props}></CountryData>

    </div>
  )
}
