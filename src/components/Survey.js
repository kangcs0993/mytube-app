let surveyList = ["1 스타리아", "2 아반떼 하이브리드", "3 코나", "4 캐스퍼"]

export default function Survey({
    setSurvey,
    surveySelection
}){

    function optionChange(e){
        setSurvey(e.target.value)
    }

    const surveyListMap = surveyList.map((survey) => {
        return(
            <>
                <label><input name="survey" type="radio" value={survey} checked={survey === surveySelection ? true : false} onChange={optionChange}/>{survey}</label><br/>
            </>
        )
    })

    return(
        <>
            <h2>survey</h2>
            <fieldset>
                {surveyListMap}
            </fieldset>
        </>
    )
}