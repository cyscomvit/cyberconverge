"use server"

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function submitRegistration(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const institution = formData.get("institution") as string
  const role = formData.get("role") as string
  const registrationType = formData.get("registrationType") as string

  // Calculate amount based on registration type
  let amount = 0
  if (registrationType === "day1" || registrationType === "both") {
    amount = 150
  }

  try {
    const { data, error } = await supabase
      .from("registrations")
      .insert([
        {
          name,
          email,
          phone,
          institution,
          role,
          registration_type: registrationType,
          amount_paid: amount,
          payment_status: amount > 0 ? "pending" : "completed",
        },
      ])
      .select()

    if (error) {
      console.error("Registration error:", error)
      return { error: "Registration failed. Please try again." }
    }

    // If payment is required, redirect to VIT Chennai payment portal
    if (amount > 0) {
      // In a real implementation, you would redirect to VIT Chennai's payment gateway
      return {
        success: true,
        requiresPayment: true,
        amount,
        paymentUrl: "https://vitchennai.edu.in/payment", // Replace with actual payment URL
      }
    }

    return { success: true, requiresPayment: false }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}
