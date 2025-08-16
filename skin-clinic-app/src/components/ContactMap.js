function ContactMap({
    query = "Malmö SkinClinic, Storgatan 39A, Malmö",
    height = 320
}) {
    const place = encodeURIComponent(query)
    return(
        <figure style={{ margin: 0 }}>
            <iframe
                title="Hitta till Malmö Skin Clinic"
                src={`https://www.google.com/maps?q=${place}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: "100%", height, border: 0, borderRadius: 12 }}
                allowFullScreen
            />
            <figcaption style={{ marginTop: 8 }}>
                <a className="map-link"
                href={`https://www.google.com/maps/search/?api=1&query=${place}`}
                target="_blank"
                rel="noreferrer"
                >Öppna i Google Maps</a>
            </figcaption>
        </figure>
    );
}

export default ContactMap