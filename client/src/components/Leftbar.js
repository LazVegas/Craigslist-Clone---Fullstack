import React from 'react'
import { useCats } from '../hooks'

export default props => {
    const { categories } = useCats()

    return (
        <div className="leftbar">
            <div id="logo">
                <a href="https://www.craigslist.org/about/sites">ryanslist</a>
            </div>
            <ul id="postlks">
                <li>
                    <a id="post" href="https://post.craigslist.org/c/lvg">create a posting</a>
                </li>
                <li>
                    <a id="https://accounts.craigslist.org/login/home">my account</a>
                </li>
            </ul>
            <form id="search" className="homepage-search" action="/search" method="GET">
                <input id="search-input" type="text" placeholder="search craigslist" />
            </form>
            <h4 id="calban">
                <a href="/d/events-classes/search/eee">event calendar</a>
            </h4>
            <table className="cal">
                <tbody>
                    <tr className="days">
                        <th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th><th>S</th>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>                        
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>                        
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <td>1</td>                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>                        
                    </tr>
                </tbody>
            </table>
            <div id="leftlinks">
                <a href="https://www.craiglist.org/about/help/">help, faq, abuse, legal</a>
                <a href="https://www.craigslist.org/about/scams">avoid scams & fraud</a>
                <a href="https://www.craigslist.org/about/safety">personal safety tips</a>
                <a href="https://www.craiglist.org/about/terms.of.use.en-us">terms of use</a>
                <a href="https://www.craigslist.org/about/privacy.policy">privacy policy</a>
                <a href="https://www.craigslist.org/about/help/system-status">system status</a>
                <br />
                <a href="https://www.craigslist.org/about/">abour craigslist</a>
                <a href="https://www.craigslist.org/about/craigslist_is_hiring">craigslist is hiring</a>
                <a href="https://www.craigslist.org/about/open_source">craigslist open source</a>
                <a href="https://blog.craigslist.org/">craigslist blog</a>
                <a href="https://www.craigslist.org/about/best/all">best-of-craigslist</a>
                <a href="https://www.craigslist.org/user/craigslist">craigslit TV</a>
                <a href="https://www.craigslistjoe.coom">craigslist joe</a>
                <a href="https://craigconnects.org">craig connects</a>
            </div>
        </div>
    )
}