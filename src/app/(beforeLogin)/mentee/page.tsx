export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    멘티 페이지 입니다.
                </h1>
                <p className="mt-4 text-2xl text-left">
                    ORS
                </p>
                <p className="mt-3 text-2xl">
                    오늘을 포함해 지난 한주간을 돌아봅니다.
                </p>
            </main>
        </div>
    );
}