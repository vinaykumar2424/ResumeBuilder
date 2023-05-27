import './resume2.css'
import JsPDF from 'jspdf';
const Resume2 = ({ formData,isVisible })=>{

    const generatePDF = () => {

        const report = new JsPDF('portrait', 'pt', 'a4');
        report.html(document.querySelector('.resume1')).then(() => {
            report.save('resume.pdf');
        });
    }
    return (
        <div>
            <div id="doc2" className="yui-t7">
		<div id="inner">

			<div id="hd">
				<div className="yui-gc">
					<div className="yui-u first">
						<h1>Jonathan Doe</h1>
						<h2>Web Designer</h2>
					</div>

					<div className="yui-u">
						<div className="contact-info">
							<h3><a href="mailto:name@yourdomain.com">name@yourdomain.com</a></h3>
							<h3>(313) - 867-5309</h3>
						</div>
					</div>
				</div>
			</div>

			<div id="bd">
				<div id="yui-main">
					<div className="yui-b">

						<div className="yui-gf">
							<div className="yui-u first">
								<h2>Profile</h2>
							</div>
							<div className="yui-u">
								<p className="enlarge">
									Progressively evolve cross-platform ideas before impactful infomediaries.
									Energistically visualize tactical initiatives before cross-media catalysts for
									change.
								</p>
							</div>
						</div>

						<div className="yui-gf">
							<div className="yui-u first">
								<h2>Skills</h2>
							</div>
							<div className="yui-u">

								<div className="talent">
									<h2>Web Design</h2>
									{/* <!-- <p>Assertively exploit wireless initiatives rather than synergistic core competencies.	</p> --> */}
								</div>

								<div className="talent">
									<h2>Interface Design</h2>
									{/* <!-- <p>Credibly streamline mission-critical value with multifunctional functionalities.	 </p> --> */}
								</div>

								<div className="talent">
									<h2>Project Direction</h2>
									{/* <!-- <p>Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.</p> --> */}
								</div>
							</div>
						</div>

						{/* <!-- <div className="yui-gf">
						<div className="yui-u first">
							<h2>Technical</h2>
						</div>
						<div className="yui-u">
							<ul className="talent">
								<li>XHTML</li>
								<li>CSS</li>
								<li className="last">Javascript</li>
							</ul>

							<ul className="talent">
								<li>Jquery</li>
								<li>PHP</li>
								<li className="last">CVS / Subversion</li>
							</ul>

							<ul className="talent">
								<li>OS X</li>
								<li>Windows XP/Vista</li>
								<li className="last">Linux</li>
							</ul>
						</div>
					</div> --> */}

						<div className="yui-gf">

							<div className="yui-u first">
								<h2>Experience</h2>
							</div>

							<div className="yui-u">

								<div className="job">
									<h2>Facebook</h2>
									<h3>Senior Interface Designer</h3>
									<p>Intrinsicly enable optimal core competencies through corporate relationships.
										Phosfluorescently implement worldwide vortals and client-focused imperatives.
										Conveniently initiate virtual paradigms and top-line convergence. </p>
								</div>

								<div className="job">
									<h2>Apple Inc.</h2>
									<h3>Senior Interface Designer</h3>
									<p>Progressively reconceptualize multifunctional "outside the box" thinking through
										inexpensive methods of empowerment. Compellingly morph extensive niche markets
										with mission-critical ideas. Phosfluorescently deliver bricks-and-clicks
										strategic theme areas rather than scalable benefits. </p>
								</div>

								<div className="job">
									<h2>Microsoft</h2>
									<h3>Principal and Creative Lead</h3>
									<p>Intrinsicly transform flexible manufactured products without excellent
										intellectual capital. Energistically evisculate orthogonal architectures through
										covalent action items. Assertively incentivize sticky platforms without
										synergistic materials. </p>
								</div>


								<div className="job last">
									<h2>International Business Machines (IBM)</h2>
									<h3>Lead Web Designer</h3>
									<p>Globally re-engineer cross-media schemas through viral methods of empowerment.
										Proactively grow long-term high-impact human capital and highly efficient
										innovation. Intrinsicly iterate excellent e-tailers with timely e-markets.</p>
								</div>

							</div>
						</div>


						<div className="yui-gf last">
							<div className="yui-u first">
								<h2>Education</h2>
							</div>
							<div className="yui-u">
								<h2>Indiana University - Bloomington, Indiana</h2>
								<h3>Dual Major, Economics and English &mdash; <strong>4.0 GPA</strong> </h3>
							</div>
						</div>


					</div>
				</div>
			</div>

			<div id="ft">
				<p>Jonathan Doe &mdash; <a href="mailto:name@yourdomain.com">name@yourdomain.com</a> &mdash; (313) -
					867-5309</p>
			</div>

		</div>
        {!isVisible && <button onClick={generatePDF} className='downloadBtn' type="button">Export PDF</button>}

	</div>
        </div>
    )
}
export default Resume2;