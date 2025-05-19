import React from 'react';
import { Navigate } from 'react-router-dom';



export function Home(){

    return(
        <>
            <div className="container py-5">
                <div className="bg-light rounded shadow p-5">
                    <h1 className="text-center text-primary mb-3">Todo-List</h1>
                    <p className="text-center fs-5 text-muted">
                    Welcome to the Todo-List application!
                    </p>
                    <p className="text-center fs-5 text-muted">
                    Here you can manage your tasks efficiently.
                    </p>
                </div>
            </div>

        </>




    )


};