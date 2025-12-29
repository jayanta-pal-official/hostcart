<script setup>

</script>
<template>
  <div class="home-page">

    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 hero-content">
            <h1 class="hero-title">
              Premium Web Hosting<br>
              For <span class="gradient-text">Modern Businesses</span>
            </h1>
            <p class="hero-subtitle">
              Lightning-fast NVMe SSD hosting with 99.9% uptime guarantee.
              Scale your online presence with enterprise-grade infrastructure.
            </p>
            <div class="d-flex gap-3 flex-wrap">
              <button class="btn btn-primary-custom">
                Get Started Now <i class="fas fa-arrow-right ms-2"></i>
              </button>
              <button class="btn btn-secondary-custom">
                <i class="fas fa-search me-2"></i> Search Domain
              </button>
            </div>
            <div class="trust-badges">
              <div class="trust-badge">
                <div class="trust-badge-icon">
                  <i class="fas fa-check-circle"></i>
                </div>
                <div class="trust-badge-text">
                  <h4>99.9%</h4>
                  <p>Uptime SLA</p>
                </div>
              </div>
              <div class="trust-badge">
                <div class="trust-badge-icon">
                  <i class="fas fa-star"></i>
                </div>
                <div class="trust-badge-text">
                  <h4>4.9/5</h4>
                  <p>Customer Rating</p>
                </div>
              </div>
              <div class="trust-badge">
                <div class="trust-badge-icon">
                  <i class="fas fa-users"></i>
                </div>
                <div class="trust-badge-text">
                  <h4>50K+</h4>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 hero-image">

            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_1pxqjqps.json

"
              background="transparent"
              speed="1"
              loop
              autoplay
              style="width:500px;height:500px"
            ></lottie-player>

          

          </div>

        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3 col-md-6 p-2">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-bolt"></i>
              </div>
              <h4>99.9% Uptime</h4>
              <p>Enterprise-grade infrastructure ensures your website stays online 24/7 with guaranteed uptime.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 p-2">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h4>Lightning Fast NVMe</h4>
              <p>Ultra-fast NVMe SSD storage delivers blazing speeds for optimal performance.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 p-2">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>Free SSL Certificate</h4>
              <p>Secure your website with free SSL encryption and protect your visitors' data.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 p-2">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-headset"></i>
              </div>
              <h4>24/7 Expert Support</h4>
              <p>Our dedicated support team is available round the clock to assist you anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="pricing-section" id="pricing">
      <div class="container">
        <div class="section-title">
          <h2>Choose Your Perfect <span class="gradient-text">Hosting Plan</span></h2>
          <p>Flexible plans designed to grow with your business</p>
        </div>
        <div class="row g-5">
          <div class="col-lg-4 col-md-6 p-3">
            <div class="pricing-card">
              <h3>Shared Hosting</h3>
              <div class="price"><span class="amount">$4.99</span><span class="period">/mo</span></div>
              <p class="billing">Billed annually</p>
              <ul class="pricing-features">
                <li><i class="fas fa-check"></i> 50 GB NVMe SSD Storage</li>
                <li><i class="fas fa-check"></i> Unlimited Bandwidth</li>
                <li><i class="fas fa-check"></i> Free SSL Certificate</li>
                <li><i class="fas fa-check"></i> 5 Email Accounts</li>
                <li><i class="fas fa-check"></i> 24/7 Support</li>
                <li><i class="fas fa-check"></i> Free Website Builder</li>
              </ul>
              <button class="btn btn-secondary-custom btn-pricing">Get Started</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-3">
            <div class="pricing-card featured">
              <div class="pricing-badge">MOST POPULAR</div>
              <h3>VPS Hosting</h3>
              <div class="price"><span class="amount">$19.99</span><span class="period">/mo</span></div>
              <p class="billing">Billed annually</p>
              <ul class="pricing-features">
                <li><i class="fas fa-check"></i> 200 GB NVMe SSD Storage</li>
                <li><i class="fas fa-check"></i> 4 CPU Cores</li>
                <li><i class="fas fa-check"></i> 8 GB RAM</li>
                <li><i class="fas fa-check"></i> Unlimited Bandwidth</li>
                <li><i class="fas fa-check"></i> Free SSL & cPanel</li>
                <li><i class="fas fa-check"></i> Priority Support</li>
              </ul>
              <button class="btn btn-primary-custom btn-pricing">Get Started</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 p-3">
            <div class="pricing-card">
              <h3>Dedicated Server</h3>
              <div class="price"><span class="amount">$89.99</span><span class="period">/mo</span></div>
              <p class="billing">Billed annually</p>
              <ul class="pricing-features">
                <li><i class="fas fa-check"></i> 1 TB NVMe SSD Storage</li>
                <li><i class="fas fa-check"></i> 16 CPU Cores</li>
                <li><i class="fas fa-check"></i> 64 GB RAM</li>
                <li><i class="fas fa-check"></i> Unlimited Bandwidth</li>
                <li><i class="fas fa-check"></i> Full Root Access</li>
                <li><i class="fas fa-check"></i> White-Glove Support</li>
              </ul>
              <button class="btn btn-secondary-custom btn-pricing">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->

    <section class="why-us-section">
      <div class="container">
        <div class="section-title">
          <h2>Why Choose <span class="gradient-text">HOSTCART </span>?</h2>
          <p>Experience the difference with our premium hosting solutions</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fas fa-server"></i>
              </div>
              <div class="benefit-content">
                <h4>Enterprise Infrastructure</h4>
                <p>State-of-the-art data centers with redundant power and cooling systems ensure maximum
                  reliability.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fas fa-lock"></i>
              </div>
              <div class="benefit-content">
                <h4>Advanced Security</h4>
                <p>Multi-layer security protocols, DDoS protection, and automated backups keep your data
                  safe.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="benefit-content">
                <h4>Scalable Solutions</h4>
                <p>Easily upgrade your resources as your business grows without any downtime.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="benefit-content">
                <h4>Instant Deployment</h4>
                <p>Get your hosting environment set up in minutes with our automated provisioning system.
                </p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fas fa-money-bill-wave"></i>
              </div>
              <div class="benefit-content">
                <h4>Competitive Pricing</h4>
                <p>Get premium hosting services at affordable rates with transparent pricing and no hidden fees.</p>
              </div>
            </div>
            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fas fa-headset"></i>
              </div>
              <div class="benefit-content">
                <h4>24/7 Expert Support</h4>
                <p>Our dedicated support team is available round the clock to assist you anytime.</p>
              </div>
            </div>
            <!-- <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <div class="benefit-content">
                <h4>Eco-Friendly Hosting</h4>
                <p>Committed to sustainability with 100% renewable energy-powered data centers.</p>
              </div>
            </div> -->
          </div>
          
        </div>
      </div>
    </section>


  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
  --dark-bg: #0a0e27;
  --card-bg: rgba(255, 255, 255, 0.05);
  --glow-color: rgba(102, 126, 234, 0.4);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-page {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
  color: #ffffff;
  overflow-x: hidden;
}

/* Announcement Bar */
.announcement-bar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px 0;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  z-index: 1000;
}

.announcement-bar a {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
  font-weight: 600;
}

/* Navbar */
.navbar {
  background: rgba(10, 14, 39, 0.95);
  backdrop-filter: blur(10px);
  padding: 15px 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 10px 0;
  box-shadow: 0 4px 30px rgba(102, 126, 234, 0.2);
}

.navbar-brand {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-link {
  color: #ffffff !important;
  font-weight: 500;
  margin: 0 10px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #00d4ff !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.btn-login {
  background: transparent;
  border: 2px solid #00d4ff;
  color: #00d4ff;
  padding: 8px 25px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

/* Hero Section */
.hero-section {
  padding: 65px 0 80px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 8s infinite;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-image {
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  /* z-index: 2; */
}

.hero-animated-image {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.hero-animated-image:hover {
  transform: scale(1.05);
}

.hero-title {
  font-size: 62px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
}

.gradient-text {
  background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 20px;
  color: #b8c5d6;
  margin-bottom: 40px;
  font-weight: 400;
}

.btn-primary-custom {
  background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

.btn-primary-custom:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4);
}

.btn-secondary-custom {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-secondary-custom:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
}

.trust-badges {
  display: flex;
  gap: 40px;
  margin-top: 50px;
  flex-wrap: wrap;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 10px;
}

.trust-badge-icon {
  font-size: 24px;
  color: #00d4ff;
}

.trust-badge-text h4 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0;
}

.trust-badge-text p {
  line-height: 1!important;
  font-size: 14px;
  color: #b8c5d6;
  margin-bottom: 0;
}

/* Feature Cards */
.features-section {
  padding: 80px 0;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
  border-color: rgba(0, 212, 255, 0.3);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 32px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.feature-card h4 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}

.feature-card p {
  color: #b8c5d6;
  font-size: 15px;
  line-height: 1.6;
}

/* Pricing Section */
.pricing-section {
  padding: 80px 0;
  background: rgba(0, 0, 0, 0.2);
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 15px;
}

.section-title p {
  font-size: 18px;
  color: #b8c5d6;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  height: 100%;
  margin-bottom: 30px;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

.pricing-card.featured {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  border: 2px solid #667eea;
  transform: scale(1.05);
}

.pricing-card.featured:hover {
  transform: scale(1.08) translateY(-10px);
}

.pricing-badge {
  background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
  color: #fff;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 20px;
}

.pricing-card h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

.pricing-card .price {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 5px;
}

.pricing-card .price span {
  font-size: 20px;
  color: #b8c5d6;
}

.pricing-card .billing {
  color: #b8c5d6;
  margin-bottom: 30px;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 30px 0;
}

.pricing-features li {
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: #b8c5d6;
}

.pricing-features li i {
  color: #00d4ff;
  margin-right: 10px;
}

.btn-pricing {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
}

/* Why Choose Us */
.why-us-section {
  padding: 80px 0;
  background: rgba(0, 0, 0, 0.2);
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.benefit-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 20px;
  flex-shrink: 0;
}

.benefit-content h4 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.benefit-content p {
  color: #b8c5d6;
  font-size: 14px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.cta-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.cta-content h2 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.9;
}

.btn-cta {
  background: #fff;
  color: #667eea;
  padding: 15px 50px;
  border-radius: 30px;
  font-weight: 700;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.3);
  padding: 60px 0 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer h5 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #00d4ff;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin-bottom: 10px;
}

.footer ul li a {
  color: #b8c5d6;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer ul li a:hover {
  color: #00d4ff;
  padding-left: 5px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  color: #b8c5d6;
}

.social-icons a {
  color: #b8c5d6;
  font-size: 20px;
  margin: 0 10px;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  color: #00d4ff;
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .section-title h2 {
    font-size: 32px;
  }

  .pricing-card.featured {
    transform: scale(1);
  }

  .trust-badges {
    justify-content: center;
  }

  .cta-content h2 {
    font-size: 32px;
  }
}
</style>
