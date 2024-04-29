
    // TODO implement

 async function get() { try {
        const response = await fetch(`http://18.231.197.45:3090/weather?city=Campina%20Grande`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        console.log("GETTING DATAS FROM WEATHER API");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("ERROR IN GET WEATHER INFOS:", error);
    }
} get()
