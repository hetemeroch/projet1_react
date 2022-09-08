import "../my_style_css/css_acceuil.css"
import Logo from "../mesimages/02.png"
const  Myhome = () => {
    return (
        <div class="global">
            <div class="left">
                <div class="search_logo">
                    <span><img src={Logo} alt="" id="logo" /></span>
                    <span id="search">
                        <input type="text" id="input_text"/>
                        <input type="submit" value="Search" class="btn"/>
                    </span>
                </div>
                <div id="menu_left">
                    <a href="#" class="link_left">
                        <i class="icon-bar-chart"></i> Tableau de bord
                    </a>
                    <a href="#" class="link_left">
                        <i class="icon-eur"></i> Tableau de production
                    </a>
                    <a href="#" class="link_left">
                        <i class="icon-share"></i> Redistribution des leads
                    </a>
                    <a href="#" class="link_left">
                        <i class="icon-list"></i> Journal de contact
                    </a>
                    <a href="#" class="link_left">
                        <i class="icon-archive"></i> Contrats et typologies
                    </a>
                </div>
            </div>
            <div class="middle"></div>
            <div class="rigth">
                <div id="alert_bar">
                    <span class="marge_gauche"><a href=""><i class="icon-home"></i> Page name</a></span>
                    <span><a href="#"><i class="icon-calendar"></i> Date heure</a></span>
                    <span><a href="#"><i class="icon-edit"></i> Edit</a></span>
                    <span><a href="#"><i class="icon-envelope-alt"></i> Enveloppe</a></span>
                    <span><a href="#"><i class="icon-user"></i> Username</a></span>
                    <span><a href="#"><i class="icon-off"></i> Logout</a></span>
                </div>

                <div id="production" class="marge_gauche marge_droit">
                    <div id="production_left">
                        <table class="table1">
                            <thead>
                                <tr>
                                    <th>Conseiller</th>
                                    <th>Progression</th>
                                    <th colspan="2">Chiffre d'affaire </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="26">26%</progress><br/></td>
                                    <td>2500&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="30">26%</progress><br/></td>
                                    <td>3000&euro;</td>
                                    <td><i class="icon-arrow-down"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="26">26%</progress><br/></td>
                                    <td>2500&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="10">26%</progress><br/></td>
                                    <td>1000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="50">26%</progress><br/></td>
                                    <td>5000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="29">26%</progress><br/></td>
                                    <td>2900&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="80">26%</progress><br/></td>
                                    <td>7000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="100">26%</progress><br/></td>
                                    <td>10000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="26">26%</progress><br/></td>
                                    <td>2000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="26">26%</progress><br/></td>
                                    <td>2000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="26">26%</progress><br/></td>
                                    <td>2000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="98">26%</progress><br/></td>
                                    <td>2000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="21">26%</progress><br/></td>
                                    <td>2000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="75">26%</progress><br/></td>
                                    <td>2000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                                <tr>
                                    <td>Username1</td>
                                    <td><progress  max="100" value="90">26%</progress><br/></td>
                                    <td>2000&euro;</td>
                                    <td><i class="icon-arrow-up"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="production_rigth">Total Jour / Total Mois</div>
                </div>
            </div>
        </div>
    )
}

export default Myhome