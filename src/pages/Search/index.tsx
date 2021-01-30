import React, { useEffect, useState } from 'react';
import { GitHub } from '../../core/components/types/ResponseGitHub';
import api from '../../core/components/utils/request';
import ImageLoader from './loaders/ImageLoader';
import InfoLoader from './loaders/InfoLoader';
import './styles.scss';

const Search = () => {
    const [gitResponse, setGitResponse] = useState<GitHub>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.get("/devsuperior")
            .then((response) => setGitResponse(response.data))
            .catch((err) => { console.error("ops! ocorreu um erro" + err); })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <div className="search-container">
                <div className="search-content">
                    <h1 className="search-title">Encontre um perfil Github</h1>
                    <form >
                        <input type="search" name="Usuário Github" id="searchId" className="search-input" />
                        <button type="submit" className="search-button">
                            <h4 className="search-button-text">Encontrar</h4>
                        </button>
                    </form>
                </div>
            </div>
            <div className="result-container">
                <div className="result-content">
                    {isLoading ?
                        <div className="result-content-loader"><ImageLoader /> <InfoLoader /></div>
                        :
                        <div className="result-content-response" >
                            <div>
                                <img src={gitResponse?.avatar_url} alt={gitResponse?.login} className="result-card-image" />
                            </div>
                            <div>
                                <div className="result-text-response-first">
                                    <h2 className="result-text-response-h3">Repositórios Publicos:{gitResponse?.public_repos}</h2>
                                    <h2 className="result-text-response-h3 resul-text-margin">Seguidores:{gitResponse?.followers}</h2>
                                    <h2 className="result-text-response-h3 resul-text-margin">Seguindo:{gitResponse?.following}</h2>  
                                </div>
                                <div className="result-text-response">
                                    <h1 className="result-text-title"> Informações</h1>
                                    <h2 className="result-text-response-h2"> <strong>Empresa:</strong> {gitResponse?.company}</h2>
                                    <h2 className="result-text-response-h2"><strong>Website/Blog:</strong>{gitResponse?.blog}</h2>
                                    <h2 className="result-text-response-h2"><strong>Localidade:</strong>{gitResponse?.location}</h2>
                                    <h2 className="result-text-response-h2"><strong>Membro desde:</strong>{gitResponse?.created_at}</h2>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>

        </>
    );
}
export default Search;