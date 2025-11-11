import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

export default function Admin() {
    const navigate = useNavigate();

    const summary = [
        { value: '5', title: 'Total Buildings' },
        { value: '2', title: 'Active Requests' },
        { value: '1', title: 'Ongoing Tasks' },
        { value: '1', title: 'Problems' },
        { value: '4', title: 'Technicians' }
    ];

    const requests = [
        {
            building: 'Green Valley Apartments',
            priority: 'Medium',
            category: 'Maintenance',
            description: 'Scheduled quarterly maintenance due',
            requester: 'Lisa Anderson',
            date: '10/11/2568 14:20:00'
        }
    ];

    return (
        <div className="admin-page">
            <header className="admin-header">
                <div className="header-left">
                    <div className="logo-box" aria-hidden="true" />
                    <div className="logo-text">
                        <strong>LiftMan</strong>
                        <span className="sub">Admin Portal</span>
                    </div>
                </div>

                <div className="header-right">
                    <div className="notifications">
                        <span className="bell" aria-hidden="true">🔔</span>
                        <span className="notif-badge">5</span>
                    </div>
                    <button
                        className="btn-logout"
                        type="button"
                        aria-label="Logout"
                        onClick={() => navigate('/login')}
                    >
                        <span className="door" aria-hidden="true">🚪</span>
                        <span>Logout</span>
                    </button>
                </div>
            </header>

            <main className="admin-main">
                <div className="dashboard-label">Dashboard</div>
                <h1 className="page-title">Admin Dashboard</h1>

                <section className="summary-cards">
                    {summary.map((s, i) => (
                        <div className="summary-card" key={i}>
                            <div className="summary-value">{s.value}</div>
                            <div className="summary-title">{s.title}</div>
                        </div>
                    ))}
                </section>

                <section className="pending-section">
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">Pending Requests</h2>
                            <p className="section-desc">Service requests waiting for assignment</p>
                        </div>
                        <span className="pending-badge">1 Pending</span>
                    </div>

                    <div className="requests-list">
                        {requests.map((req, idx) => (
                            <article className="request-card" key={idx}>
                                <div className="request-left-border" aria-hidden="true" />
                                <div className="request-content">
                                    <h3 className="request-building">{req.building}</h3>
                                    <div className="request-tags">
                                        <span className="tag tag--priority">{req.priority}</span>
                                        <span className="tag tag--category">{req.category}</span>
                                    </div>
                                    <p className="request-desc">{req.description}</p>
                                    <div className="request-footer">
                                        <span className="request-meta">Requested by {req.requester} • {req.date}</span>
                                    </div>
                                </div>

                                <div className="request-action">
                                    <button className="btn-assign" type="button">
                                        Assign Technician
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}