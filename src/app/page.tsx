import { Header } from "@/components/core/header";
import { Logo } from "@/components/core/logo";
import { Viewport } from "@/components/core/viewport";

export default function Page() {
    return (
        <>
            <Header>
                <Logo width="108px" height="27px" fill="#ffffff" />
            </Header>
            <Viewport>
                <p>Home</p>
            </Viewport>
        </>
    );
}
