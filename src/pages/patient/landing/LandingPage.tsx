export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-200">
        <h1 className="text-xl font-bold">MediBase</h1>
        <div className="text-sm text-gray-700">김커피 님</div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">MediBase</h2>
        <p className="text-lg font-medium mb-8">
          의학의 진보를 앞당기는,
          <br />
          고품질 의료 데이터 수집 및 참여 플랫폼
        </p>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded font-semibold">
          참여하고 보상받기
        </button>
      </section>

      {/* Support Section */}
      <section className="py-12 px-4 text-center border-t border-gray-200">
        <h3 className="text-xl font-semibold mb-8">후원기관</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-6 rounded shadow-sm">
            <p className="text-sm text-gray-700 mb-2">
              인센티브 관련 (참여 보상?)
            </p>
            <p className="text-lg font-bold">리포트</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-sm">
            <p className="text-sm text-gray-700 mb-2">인센티브 관련</p>
            <p className="text-lg font-bold">배당금</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-sm">
            <p className="text-sm text-gray-700 mb-2">안전한 개인 정보 보장</p>
            <p className="text-lg font-bold">보안</p>
          </div>
        </div>
      </section>
    </div>
  );
}
