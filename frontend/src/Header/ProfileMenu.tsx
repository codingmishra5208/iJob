import { Menu, Switch } from '@mantine/core';
import {
    IconUserCircle,
    IconFileText,
    IconMoon,
    IconMoonStars,
    IconLogout2,
    IconSun,
    IconLogin2,
    IconLogin,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../Context/AuthProvider';

const ProfileMenu = () => {
    const { logout, getUserName } = useAuth();
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);

    const handleLogout = () => {
        try {
            logout();
            toast.success("Logout Successfully..");
            window.location.reload();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const username = getUserName() || "guest"; 

    return (
        <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <div className="flex items-center gap-3 rounded-full cursor-pointer">
                    <div className='text-bright-sun-400'>{username}</div>
                    <img src='avatar.png' alt="" className="h-10 w-10 rounded-full" />
                </div>
            </Menu.Target>

            <Menu.Dropdown>
                <Link to='/profile'>
                    <Menu.Item leftSection={<IconUserCircle size={14} />}>
                        Profile
                    </Menu.Item>
                </Link>
                <Link to='/signup'>
                    <Menu.Item leftSection={<IconLogin2 size={14} />}>
                        Signup
                    </Menu.Item>
                </Link>
                <Link to='/login'>
                    <Menu.Item leftSection={<IconLogin size={14} />}>
                        Login
                    </Menu.Item>
                </Link>
                <Menu.Item leftSection={<IconFileText size={14} />}>
                    Resume
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconMoon size={14} />}
                    rightSection={
                        <Switch
                            checked={checked}
                            onChange={(event) => setChecked(event.currentTarget.checked)}
                            size="md"
                            color="dark.4"
                            onLabel={<IconSun size={16} stroke={2.5} color="yellow" />}
                            offLabel={<IconMoonStars size={16} stroke={2.5} color="cyan" />}
                        />
                    }
                >
                    Dark Mode
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                    color="red"
                    leftSection={<IconLogout2 size={14} />}
                    onClick={handleLogout}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default ProfileMenu;
