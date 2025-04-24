import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";

export function OwnedObjects() {
    const account = useCurrentAccount();
    const { data, isPending, error } = useSuiClientQuery(
        "getOwnedObjects",
        {
            owner: account?.address as string,
        },
        {
            enabled: !!account,
        },
    );

    if (!account) {
        return;
    }

    if (error) {
        return <div className={'flex'}>Error: {error.message}</div>;
    }

    if (isPending || !data) {
        return <div className={'flex'}>Loading...</div>;
    }

    return (
        <div className={'flex flex-col my-2'}>
        {data.data.length === 0 ? (
                <p>No objects owned by the connected wallet</p>
) : (
        <p className={'text-[1.2rem]'}>Objects owned by the connected wallet</p>
)}
    {data.data.map((object) => (
        <div className={'flex'} key={object.data?.objectId}>
            <p>Object ID: {object.data?.objectId}</p>
    </div>
    ))}
    </div>
);
}