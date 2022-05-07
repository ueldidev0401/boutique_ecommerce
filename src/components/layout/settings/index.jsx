import Logo from "@components/ui/logo";
import Select from "@components/ui/select";
import settings from "@data/settings";
import OffCanvas from "@components/ui/offCanvas";
import {OffCanvasCloseBtn, OffCanvasHead} from "@components/ui/offCanvas/style";
import {SettingsWrap, SettingsItem, SettingsFooter} from "@components/layout/settings/settings.style";
import {IoIosHeart} from "react-icons/io";
import {BiSupport} from "react-icons/bi";

const SettingsSidebar = ({isOpen, onHandler}) => {
    return (
        <OffCanvas onHandler={onHandler} open={isOpen}>
            <OffCanvasHead>
                <Logo
                    width={100}
                    src="/images/logo/logo.png"
                />
                <OffCanvasCloseBtn onClick={() => onHandler()}>x</OffCanvasCloseBtn>
            </OffCanvasHead>

            <SettingsWrap>
                <SettingsItem>
                    <Select
                        label="Language"
                        options={settings.languages}
                    />
                </SettingsItem>

                <SettingsItem>
                    <Select
                        label="Currency"
                        options={settings.currencies}
                    />
                </SettingsItem>
            </SettingsWrap>

            <SettingsFooter>
                <div className="support">
                    <BiSupport/>
                    <a href="tel:+882836272324">+882836272324</a>
                </div>
                <p>
                    © 2021, Furns. Made With <IoIosHeart/> by <a href="https://hasthemes.com/" target="_blank" rel="noreferrer noopener"> HasThemes.</a>
                </p>
            </SettingsFooter>
        </OffCanvas>
    );
};

export default SettingsSidebar;
