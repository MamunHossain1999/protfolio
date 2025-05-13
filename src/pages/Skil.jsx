

const Skil = () => {
    return (
        <section id="skills" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">My Skills</h2>
          <div className="space-y-8">
            {/* Frontend Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frontend Development</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-700">HTML</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <span className="text-gray-700">CSS</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <span className="text-gray-700">TailwindCss</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <span className="text-gray-700">BootStap</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <span className="text-gray-700">JavaScript</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <span className="text-gray-700">React.js</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Backend Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Backend Development</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-700">Node.js</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <span className="text-gray-700">Express.js</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <span className="text-gray-700">MongoDB</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tools */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tools</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-700">Git</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <span className="text-gray-700">VS Code</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default Skil;