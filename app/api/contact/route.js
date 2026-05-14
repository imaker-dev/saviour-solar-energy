import { NextResponse } from "next/server";
import { transporter } from "../../lib/mail";

// ─── Brand Constants ────────────────────────────────────────────────────────
const BRAND = {
  name: "Savior Solar Energy",
  tagline: "STEP TOWARDS SOLAR",
  email: "needhelp@saviorsolar.com",
  phone: "+91 84859 65451",
  address:
    "602, 6th Floor, Pramukh Square, Gandhinagar Bypass Rd, Sargasan, Gandhinagar, Gujarat 382421",
  website: "www.saviorsolar.com",
  websiteUrl: "https://saviorsolar.com",
  logoUrl: "https://i.ibb.co/Vcn3gr1R/logo.png",
  facebook: "https://facebook.com/saviorsolar",
  instagram: "https://instagram.com/saviorsolar",
  linkedin: "https://linkedin.com/company/savior-solar",
};

const LEGAL_DISCLAIMER = `This email and any attachments are confidential and intended solely for the use of the individual or entity to whom it is addressed. Please notify us at <a href="mailto:${BRAND.email}" style="color:#1a73e8;">${BRAND.email}</a> if you have received this email in error and remove it from your system. Our liability in connection with transmitting, unauthorized access to, or viruses in this message and its attachments, is limited to re-supplying this message and its attachments. This email does not commit ${BRAND.name} to any contractual obligation unless this has been approved by the authorized personnel in writing.`;

// ─── Email Wrapper ──────────────────────────────────────────────────────────
function wrapEmail({ subject, bodyContent, isAdmin = false }) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${subject}</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#ffffff; width:100%;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; padding:20px;">
      <tr>
        <td style="width:100%;">

          <!-- Dynamic Body Content -->
          <div style="font-size:14px; line-height:1.6; color:#222222;">
            ${bodyContent}
          </div>

          <!-- Divider -->
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:32px; margin-bottom:24px;">
            <tr>
              <td style="border-top:1px solid #e5e7eb; font-size:0; line-height:0;">&nbsp;</td>
            </tr>
          </table>

          <!-- Signature Section -->
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="text-align:left; padding-bottom:12px;">
                <img src="${BRAND.logoUrl}" alt="${BRAND.name}" width="70" style="display:block;">
              </td>
            </tr>
            <tr>
              <td style="text-align:left; padding-bottom:12px;">
                <p style="margin:0; font-size:16px; font-weight:bold; color:#0D1B2A;">${BRAND.name}</p>
                <p style="margin:3px 0 0 0; font-size:11px; color:#F5A623; font-weight:600; letter-spacing:2px; text-transform:uppercase;">${BRAND.tagline}</p>
              </td>
            </tr>
            <tr>
              <td style="text-align:left; padding-bottom:12px;">
                <p style="margin:0; font-size:14px; color:#333333; line-height:1.6;">
                  <a href="tel:${BRAND.phone.replace(/\s/g, "")}" style="color:#1a73e8; text-decoration:none;">${BRAND.phone}</a><br>
                  <a href="mailto:${BRAND.email}" style="color:#1a73e8; text-decoration:none;">${BRAND.email}</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="text-align:left; padding-bottom:12px;">
                <p style="margin:0; font-size:14px; color:#333333; line-height:1.6;">
                  ${BRAND.address}<br>
                  <a href="${BRAND.websiteUrl}" target="_blank" style="color:#1a73e8; text-decoration:none;">${BRAND.website}</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="text-align:left; padding-bottom:8px;">
                <a href="${BRAND.facebook}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" width="18" style="margin-right:10px;"></a>
                <a href="${BRAND.instagram}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/24/2111/2111463.png" alt="Instagram" width="18" style="margin-right:10px;"></a>
                <a href="${BRAND.linkedin}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/24/145/145807.png" alt="LinkedIn" width="18"></a>
              </td>
            </tr>
          </table>

          ${
            !isAdmin
              ? `
          <!-- Unsubscribe / Privacy -->
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:20px;">
            <tr>
              <td style="font-size:11px; color:#999999;">
                <a href="${BRAND.websiteUrl}/unsubscribe" style="color:#999999; text-decoration:underline;">Unsubscribe</a>
                &nbsp;&middot;&nbsp;
                <a href="${BRAND.websiteUrl}/privacy" style="color:#999999; text-decoration:underline;">Privacy Policy</a>
              </td>
            </tr>
          </table>`
              : ""
          }

          <!-- Divider -->
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:20px; margin-bottom:16px;">
            <tr>
              <td style="border-top:1px solid #e5e7eb; font-size:0; line-height:0;">&nbsp;</td>
            </tr>
          </table>

          <!-- Legal Footer -->
          <p style="font-size:10px; color:#888888; margin:0; line-height:1.6;">
            ${LEGAL_DISCLAIMER}
          </p>

        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

// ─── Admin Email ────────────────────────────────────────────────────────────
function buildAdminEmail({
  fullName,
  phone,
  email,
  pincode,
  bill,
  type,
  societyName,
  designation,
  agmStatus,
  companyName,
  city,
}) {
  const typeColor =
    type === "Housing"
      ? "#16a34a"
      : type === "Commercial"
        ? "#1a73e8"
        : "#ea580c";
  const typeBg =
    type === "Housing"
      ? "#f0fdf4"
      : type === "Commercial"
        ? "#eff6ff"
        : "#fff7ed";

  function row(label, value) {
    return `
      <tr>
        <td style="padding:6px 0; font-size:14px;">
          <strong style="color:#555555;">${label}:</strong> ${value}
        </td>
      </tr>`;
  }

  let extraRows = "";
  if (type === "Housing") {
    extraRows =
      row("Society", societyName || "-") +
      row("Designation", designation || "-") +
      row("AGM Status", agmStatus || "-");
  } else if (type === "Commercial") {
    extraRows = row("Company", companyName || "-") + row("City", city || "-");
  }

  const bodyContent = `
    <p style="font-size:14px; color:#333333; margin:0 0 4px;">Hello Team,</p>
    <p style="font-size:14px; color:#333333; margin:0 0 20px;">A new solar inquiry has been submitted. Please find the details below:</p>

    <p style="font-size:14px; font-weight:bold; color:#0D1B2A; margin:0 0 8px;">Inquiry Details</p>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:16px;">
      <tr>
        <td style="padding:6px 0; font-size:14px;">
          <strong style="color:#555555;">Type:</strong> 
          <span style="display:inline-block; font-size:12px; font-weight:600; color:${typeColor}; background:${typeBg}; padding:2px 10px; border-radius:12px;">${type} Solar</span>
        </td>
      </tr>
      ${row("Full Name", fullName)}
      ${row("Phone", `<a href="tel:${phone}" style="color:#1a73e8;">${phone}</a>`)}
      ${row("Email", `<a href="mailto:${email}" style="color:#1a73e8;">${email}</a>`)}
      ${row("Pincode", pincode)}
      ${row("Monthly Bill", `<strong>&#8377; ${bill}</strong>`)}
      ${extraRows}
    </table>

    <table cellpadding="0" cellspacing="0" border="0" style="margin:20px 0;">
      <tr>
        <td style="background:#0D1B2A; border-radius:4px;">
          <a href="mailto:${email}?subject=Re: Your ${type} Solar Inquiry"
            style="display:inline-block; padding:10px 24px; font-size:13px; font-weight:600; color:#ffffff; text-decoration:none;">
            Reply to Prospect →
          </a>
        </td>
      </tr>
    </table>

    <p style="font-size:11px; color:#888888; margin:0;">
      Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "long", timeStyle: "short" })} IST
    </p>
  `;

  return wrapEmail({
    subject: `New ${type} Inquiry - ${fullName}`,
    bodyContent,
    isAdmin: true,
  });
}

// ─── User Email ─────────────────────────────────────────────────────────────
function buildUserEmail({ fullName, type, bill }) {
  const bodyContent = `
    <p style="font-size:14px; color:#333333; margin:0 0 16px;">Dear ${fullName},</p>

    <p style="font-size:14px; color:#333333; line-height:1.7; margin:0 0 12px;">
      Thank you for reaching out to <strong style="color:#0D1B2A;">${BRAND.name}</strong>! 
      We have successfully received your inquiry for a <strong>${type} Solar</strong> installation.
    </p>

    <p style="font-size:14px; color:#333333; line-height:1.7; margin:0 0 20px;">
      Our team will review your details and get in touch within <strong>24 business hours</strong> 
      with a customized solar proposal. Meanwhile, feel free to reach out if you have any questions.
    </p>

    <!-- Summary Box -->
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; margin-bottom:24px;">
      <tr>
        <td style="padding:14px 18px;">
          <p style="margin:0 0 10px; font-size:13px; font-weight:bold; color:#555555; letter-spacing:1px; text-transform:uppercase;">Your Inquiry Summary</p>
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="padding:5px 0; font-size:14px; width:120px; color:#777777;">Type:</td>
              <td style="padding:5px 0; font-size:14px; font-weight:600; color:#222222;">${type} Solar</td>
            </tr>
            <tr>
              <td style="padding:5px 0; font-size:14px; color:#777777;">Monthly Bill:</td>
              <td style="padding:5px 0; font-size:14px; font-weight:700; color:#222222;">&#8377; ${bill}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="font-size:14px; color:#333333; margin:0 0 4px;">Warm regards,</p>
    <p style="font-size:14px; color:#0D1B2A; margin:0; font-weight:bold;">
      Sales Team<br>
      <span style="font-weight:normal; color:#777777; font-size:13px;">${BRAND.name}</span>
    </p>
  `;

  return wrapEmail({
    subject: `We've Received Your Inquiry - ${BRAND.name}`,
    bodyContent,
    isAdmin: false,
  });
}

// ─── Route Handler ──────────────────────────────────────────────────────────
export async function POST(req) {
  try {
    const body = await req.json();
    const {
      fullName,
      phone,
      pincode,
      bill,
      type,
      societyName,
      designation,
      agmStatus,
      companyName,
      city,
      email,
    } = body;

    await transporter.sendMail({
      from: `"${BRAND.name}" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New ${type} Inquiry - ${fullName}`,
      html: buildAdminEmail({
        fullName,
        phone,
        email,
        pincode,
        bill,
        type,
        societyName,
        designation,
        agmStatus,
        companyName,
        city,
      }),
    });

    await transporter.sendMail({
      from: `"${BRAND.name}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We've Received Your Inquiry - ${BRAND.name}`,
      html: buildUserEmail({ fullName, type, bill }),
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 },
    );
  }
}
