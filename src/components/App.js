import React from "react";
import Busca from "./Busca";

export default () => {
    return(
        <div className="grid justify-content-center m-auto w-9 border-round bprder-1 border-400">
            <div className="col-12">
                <h1>Exibir uma lista de...</h1>
            </div>
            <div className="col-8">
                <Busca />
            </div>
        </div>
    )
}