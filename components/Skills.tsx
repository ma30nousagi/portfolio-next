export function Skills() {
    return (
        <section id="skills" className="container mb-20">
            <h2 className="text-2xl font-bold mb-10 text-center titleUnderbar">Skills</h2>
            <div className="">
              <ul className="grid md:grid-cols-6 md:gap-6 grid-cols-3 gap-4">
                <li className="md:mb-0 mb-10 mx-auto">
                  <div className="text-center">
                    <h3 className="text-lg text-center font-bold mb-4">HTML</h3>
                    <div className="graph-circle html text-xs"><p>HTML</p></div>
                  </div>
                </li>
                <li className="md:mb-0 mb-10 mx-auto">
                  <div className="text-center">
                    <h3 className="text-lg text-center font-bold mb-4">CSS</h3>
                    <div className="graph-circle css text-xs"><p>CSS</p></div>
                  </div>
                </li>
                <li className="md:mb-0 mb-10 mx-auto">
                  <div className="text-center">
                    <h3 className="text-lg text-center font-bold mb-4">JavaScript</h3>
                    <div className="graph-circle js text-xs"><p>JS</p></div>
                  </div>
                </li>
                <li className="md:mb-0 mb-10 mx-auto">
                  <div className="text-center">
                    <h3 className="text-lg text-center font-bold mb-4">liquid</h3>
                    <div className="graph-circle html text-xs"><p>Shopify</p></div>
                  </div>
                </li>
                <li className="md:mb-0 mb-10 mx-auto">
                  <div className="text-center">
                    <h3 className="text-lg text-center font-bold mb-4">Python</h3>
                    <div className="graph-circle python text-xs"><p>PY</p></div>
                  </div>
                </li>
                <li className="md:mb-0 mb-10 mx-auto">
                  <div className="text-center">
                    <h3 className="text-lg text-center font-bold mb-4">PHP</h3>
                    <div className="graph-circle js text-xs"><p>WordPress</p></div>
                  </div>
                </li>
              </ul>
            </div>
        </section>
    );
}