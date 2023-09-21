import Layout from "../components/Layout"
import SearchField from "../components/SearchField"
import Pagination from "../components/Pagination"

import './Results.css'

export default function Results(props) {
    
    return (
        <Layout>
            <main id="results__container">

                <div id="results__inner-container">

                    <div id="search-area">
                        <SearchField />
                    </div>

                    <div id="results-area">

                        <div to="" className="result-content" data-orgid="">

                            <h3>Maine Power For Maine People</h3>
                            <p><strong>Bar Harbor, ME</strong></p>

                        </div>

                        <div to="" className="result-content" data-orgid="">

                            <h3>Maine Power For Maine People</h3>
                            <p><strong>Bar Harbor, ME</strong></p>

                        </div>

                        <div to="" className="result-content" data-orgid="">

                            <h3>Maine Power For Maine People</h3>
                            <p><strong>Bar Harbor, ME</strong></p>

                        </div>

                        <div to="" className="result-content" data-orgid="">

                            <h3>Maine Power For Maine People</h3>
                            <p><strong>Bar Harbor, ME</strong></p>

                        </div>

                        <div to="" className="result-content" data-orgid="">

                            <h3>Maine Power For Maine People</h3>
                            <p><strong>Bar Harbor, ME</strong></p>

                        </div>

                        <div to="" className="result-content" data-orgid="">

                            <h3>Maine Power For Maine People</h3>
                            <p><strong>Bar Harbor, ME</strong></p>

                        </div>

                        <div to="" className="result-content" data-orgid="">

                            <h3>Maine Power For Maine People</h3>
                            <p><strong>Bar Harbor, ME</strong></p>

                        </div>

                        <div to="" className="result-content" data-orgid="">

                            <h3>Maine Power For Maine People</h3>
                            <p><strong>Bar Harbor, ME</strong></p>

                        </div>

                    </div>
                    <div id="page-area">
                        <Pagination length='40' current='0' />
                    </div>
                </div>

            </main>
        </Layout>
    )
}